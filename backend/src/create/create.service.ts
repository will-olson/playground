import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SigmaMemberService } from '../sigma/sigma-member.service';

@Injectable()
export class CreateService {
  constructor(
    private prisma: PrismaService,
    private sigmaMemberService: SigmaMemberService
  ) {}

  async getTemplates(userId: string) {
    // Get available workbook templates
    const templates = await this.prisma.workbookTemplate.findMany({
      where: {
        OR: [
          { isPublic: true },
          { createdBy: userId }
        ]
      },
      include: {
        _count: {
          select: {
            usageCount: true
          }
        }
      },
      orderBy: [
        { isPopular: 'desc' },
        { usageCount: 'desc' }
      ]
    });

    return { templates };
  }

  async createWorkbook(userId: string, workbookData: any) {
    const {
      templateId,
      name,
      description,
      userEmail,
      tags,
      isPublic,
      allowComments,
      allowSharing
    } = workbookData;

    // Get template if provided
    let template = null;
    if (templateId) {
      template = await this.prisma.workbookTemplate.findUnique({
        where: { id: templateId }
      });
    }

    // Create workbook
    const workbook = await this.prisma.workbook.create({
      data: {
        name: name || template?.name || 'Untitled Workbook',
        description: description || template?.description || '',
        userId,
        isPublic: isPublic ?? true,
        allowComments: allowComments ?? true,
        allowSharing: allowSharing ?? true,
        status: 'published',
        templateId: templateId || null
      }
    });

    // Add tags if provided
    if (tags && tags.length > 0) {
      for (const tagName of tags) {
        let tag = await this.prisma.tag.findUnique({
          where: { name: tagName }
        });

        if (!tag) {
          tag = await this.prisma.tag.create({
            data: { name: tagName }
          });
        }

        await this.prisma.workbookTag.create({
          data: {
            workbookId: workbook.id,
            tagId: tag.id
          }
        });
      }
    }

    // Enhanced Sigma integration for internal users
    const isInternalUser = userEmail?.endsWith('@sigmacomputing.com');
    if (isInternalUser) {
      try {
        // Check if user has Sigma member account
        let sigmaMember = await this.sigmaMemberService.getMemberByEmail(userEmail);
        
        if (!sigmaMember) {
          // Create Sigma member for internal user
          const user = await this.prisma.user.findUnique({
            where: { id: userId }
          });

          sigmaMember = await this.sigmaMemberService.createSigmaMember({
            email: userEmail,
            firstName: user?.fullName?.split(' ')[0] || '',
            lastName: user?.fullName?.split(' ').slice(1).join(' ') || '',
            memberType: 'creator'
          });
        }

        // Link accounts if not already linked
        if (!workbook.user.sigmaMemberId) {
          await this.prisma.user.update({
            where: { id: userId },
            data: { sigmaMemberId: sigmaMember.memberId }
          });
        }
      } catch (error) {
        console.error('Failed to create Sigma member for internal user:', error);
      }
    }

    // Update template usage count
    if (template) {
      await this.prisma.workbookTemplate.update({
        where: { id: templateId },
        data: {
          usageCount: { increment: 1 }
        }
      });
    }

    // Create activity log
    await this.prisma.activityLog.create({
      data: {
        userId,
        type: 'workbook_created',
        workbookId: workbook.id,
        metadata: { 
          action: 'created_workbook',
          templateId: templateId || null,
          isPublic,
          allowComments,
          allowSharing
        }
      }
    });

    return {
      workbookId: workbook.id,
      name: workbook.name,
      success: true
    };
  }

  async getExportSchedules(userId: string) {
    const schedules = await this.prisma.exportSchedule.findMany({
      where: { userId },
      include: {
        workbook: {
          select: { name: true }
        }
      },
      orderBy: { nextRun: 'asc' }
    });

    return { schedules };
  }

  async createExportSchedule(userId: string, scheduleData: any) {
    const {
      name,
      frequency,
      format,
      workbookId,
      cronExpression
    } = scheduleData;

    const schedule = await this.prisma.exportSchedule.create({
      data: {
        name,
        frequency,
        format,
        workbookId,
        userId,
        cronExpression,
        status: 'active',
        lastRun: null,
        nextRun: this.calculateNextRun(frequency, cronExpression)
      }
    });

    return { schedule };
  }

  async copyWorkbook(userId: string, sourceWorkbookId: string, newName: string) {
    // Get source workbook
    const sourceWorkbook = await this.prisma.workbook.findFirst({
      where: {
        id: sourceWorkbookId,
        OR: [
          { userId },
          { isPublic: true }
        ]
      },
      include: {
        tags: true
      }
    });

    if (!sourceWorkbook) {
      throw new Error('Source workbook not found or access denied');
    }

    // Create new workbook
    const newWorkbook = await this.prisma.workbook.create({
      data: {
        name: newName,
        description: sourceWorkbook.description,
        userId,
        isPublic: false, // Copy is private by default
        allowComments: sourceWorkbook.allowComments,
        allowSharing: sourceWorkbook.allowSharing,
        status: 'draft'
      }
    });

    // Copy tags
    for (const tag of sourceWorkbook.tags) {
      await this.prisma.workbookTag.create({
        data: {
          workbookId: newWorkbook.id,
          tagId: tag.tagId
        }
      });
    }

    // Create activity log
    await this.prisma.activityLog.create({
      data: {
        userId,
        type: 'workbook_copied',
        workbookId: newWorkbook.id,
        metadata: { 
          action: 'copied_workbook',
          sourceWorkbookId
        }
      }
    });

    return {
      workbookId: newWorkbook.id,
      name: newWorkbook.name,
      success: true
    };
  }

  async createFromTemplate(userId: string, templateData: any) {
    const { templateId, name, userEmail } = templateData;

    // Get template
    const template = await this.prisma.workbookTemplate.findUnique({
      where: { id: templateId }
    });

    if (!template) {
      throw new Error('Template not found');
    }

    // Create workbook from template
    const workbook = await this.prisma.workbook.create({
      data: {
        name: name || template.name,
        description: template.description,
        userId,
        isPublic: false, // Template-based workbooks start as private
        allowComments: true,
        allowSharing: true,
        status: 'draft',
        templateId
      }
    });

    // Copy template tags
    const templateTags = await this.prisma.templateTag.findMany({
      where: { templateId }
    });

    for (const templateTag of templateTags) {
      await this.prisma.workbookTag.create({
        data: {
          workbookId: workbook.id,
          tagId: templateTag.tagId
        }
      });
    }

    // Update template usage count
    await this.prisma.workbookTemplate.update({
      where: { id: templateId },
      data: {
        usageCount: { increment: 1 }
      }
    });

    // Enhanced Sigma integration for internal users
    const isInternalUser = userEmail?.endsWith('@sigmacomputing.com');
    if (isInternalUser) {
      try {
        // Check if user has Sigma member account
        let sigmaMember = await this.sigmaMemberService.getMemberByEmail(userEmail);
        
        if (!sigmaMember) {
          // Create Sigma member for internal user
          const user = await this.prisma.user.findUnique({
            where: { id: userId }
          });

          sigmaMember = await this.sigmaMemberService.createSigmaMember({
            email: userEmail,
            firstName: user?.fullName?.split(' ')[0] || '',
            lastName: user?.fullName?.split(' ').slice(1).join(' ') || '',
            memberType: 'creator'
          });
        }

        // Link accounts if not already linked
        if (!workbook.user.sigmaMemberId) {
          await this.prisma.user.update({
            where: { id: userId },
            data: { sigmaMemberId: sigmaMember.memberId }
          });
        }
      } catch (error) {
        console.error('Failed to create Sigma member for internal user:', error);
      }
    }

    // Create activity log
    await this.prisma.activityLog.create({
      data: {
        userId,
        type: 'workbook_created_from_template',
        workbookId: workbook.id,
        metadata: { 
          action: 'created_workbook_from_template',
          templateId
        }
      }
    });

    return {
      workbookId: workbook.id,
      name: workbook.name,
      success: true
    };
  }

  private calculateNextRun(frequency: string, cronExpression?: string): Date {
    const now = new Date();
    
    switch (frequency) {
      case 'daily':
        return new Date(now.getTime() + 24 * 60 * 60 * 1000);
      case 'weekly':
        return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
      case 'monthly':
        return new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
      default:
        return new Date(now.getTime() + 24 * 60 * 60 * 1000);
    }
  }
}
