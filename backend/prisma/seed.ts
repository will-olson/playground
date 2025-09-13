import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@sigmaplayground.com' },
    update: {},
    create: {
      username: 'admin',
      email: 'admin@sigmaplayground.com',
      password_hash: adminPassword,
      full_name: 'Admin User',
      bio: 'Platform administrator',
      title: 'Platform Admin',
      organization: 'Sigma Playground',
      is_admin: true,
      is_verified: true,
      is_active: true,
    },
  });

  console.log('✅ Admin user created:', admin.username);

  // Create sample users
  const users: any[] = [];
  const userData = [
    {
      username: 'johndoe',
      email: 'john@example.com',
      full_name: 'John Doe',
      bio: 'Data analyst passionate about visualization',
      title: 'Senior Data Analyst',
      organization: 'Tech Corp',
      location: 'San Francisco, CA',
      social_links: {
        linkedin: 'https://linkedin.com/in/johndoe',
        twitter: 'https://twitter.com/johndoe',
      },
    },
    {
      username: 'janesmith',
      email: 'jane@example.com',
      full_name: 'Jane Smith',
      bio: 'BI Developer with expertise in Sigma',
      title: 'BI Developer',
      organization: 'Data Solutions Inc',
      location: 'New York, NY',
      social_links: {
        linkedin: 'https://linkedin.com/in/janesmith',
        website: 'https://janesmith.dev',
      },
    },
    {
      username: 'mikejohnson',
      email: 'mike@example.com',
      full_name: 'Mike Johnson',
      bio: 'Data scientist and visualization enthusiast',
      title: 'Data Scientist',
      organization: 'Analytics Co',
      location: 'Seattle, WA',
      social_links: {
        github: 'https://github.com/mikejohnson',
        linkedin: 'https://linkedin.com/in/mikejohnson',
      },
    },
  ];

  for (const userInfo of userData) {
    const password = await bcrypt.hash('password123', 10);
    const user = await prisma.user.upsert({
      where: { email: userInfo.email },
      update: {},
      create: {
        ...userInfo,
        password_hash: password,
        is_verified: true,
        is_active: true,
      },
    });
    users.push(user);
  }

  console.log('✅ Sample users created:', users.length);

  // Create tags
  const tags: any[] = [];
  const tagData = [
    { name: 'Finance', description: 'Financial data and analytics', color: '#3b82f6' },
    { name: 'Marketing', description: 'Marketing analytics and insights', color: '#10b981' },
    { name: 'Sales', description: 'Sales performance and metrics', color: '#f59e0b' },
    { name: 'Operations', description: 'Operational data and KPIs', color: '#8b5cf6' },
    { name: 'HR', description: 'Human resources analytics', color: '#ef4444' },
    { name: 'Product', description: 'Product analytics and usage', color: '#06b6d4' },
    { name: 'Customer', description: 'Customer analytics and behavior', color: '#84cc16' },
    { name: 'Dashboard', description: 'Executive dashboards and reports', color: '#f97316' },
  ];

  for (const tagInfo of tagData) {
    const tag = await prisma.tag.upsert({
      where: { name: tagInfo.name },
      update: {},
      create: tagInfo,
    });
    tags.push(tag);
  }

  console.log('✅ Tags created:', tags.length);

  // Create sample workbooks
  const workbooks: any[] = [];
  const workbookData = [
    {
      title: 'Q4 Sales Performance Dashboard',
      description: 'Comprehensive dashboard showing Q4 sales performance across all regions and product lines.',
      sigma_embed_url: 'https://app.sigma.com/embed/example1',
      author_id: users[0].id,
      tags: ['Sales', 'Dashboard'],
    },
    {
      title: 'Marketing Campaign ROI Analysis',
      description: 'Detailed analysis of marketing campaign performance and return on investment.',
      sigma_embed_url: 'https://app.sigma.com/embed/example2',
      author_id: users[1].id,
      tags: ['Marketing', 'Finance'],
    },
    {
      title: 'Customer Churn Prediction Model',
      description: 'Machine learning model for predicting customer churn with interactive visualizations.',
      sigma_embed_url: 'https://app.sigma.com/embed/example3',
      author_id: users[2].id,
      tags: ['Customer', 'Product'],
    },
    {
      title: 'Employee Performance Metrics',
      description: 'HR dashboard tracking employee performance, satisfaction, and retention metrics.',
      sigma_embed_url: 'https://app.sigma.com/embed/example4',
      author_id: users[0].id,
      tags: ['HR', 'Operations'],
    },
    {
      title: 'Supply Chain Optimization',
      description: 'Analysis of supply chain efficiency and optimization opportunities.',
      sigma_embed_url: 'https://app.sigma.com/embed/example5',
      author_id: users[1].id,
      tags: ['Operations', 'Dashboard'],
    },
    {
      title: 'Product Usage Analytics',
      description: 'Deep dive into product usage patterns and user engagement metrics.',
      sigma_embed_url: 'https://app.sigma.com/embed/example6',
      author_id: users[2].id,
      tags: ['Product', 'Customer'],
    },
  ];

  for (const workbookInfo of workbookData) {
    const workbook = await prisma.workbook.create({
      data: {
        title: workbookInfo.title,
        description: workbookInfo.description,
        sigma_embed_url: workbookInfo.sigma_embed_url,
        author_id: workbookInfo.author_id,
        view_count: Math.floor(Math.random() * 1000),
        favorite_count: Math.floor(Math.random() * 100),
        published_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000), // Random date within last 30 days
      },
    });

    // Add tags to workbook
    const workbookTags = workbookInfo.tags.map(tagName => {
      const tag = tags.find(t => t.name === tagName);
      return { workbook_id: workbook.id, tag_id: tag!.id };
    });

    await prisma.workbookTag.createMany({
      data: workbookTags,
    });

    workbooks.push(workbook);
  }

  console.log('✅ Sample workbooks created:', workbooks.length);

  // Create some favorites
  const favorites: any[] = [];
  for (let i = 0; i < 20; i++) {
    const userId = users[Math.floor(Math.random() * users.length)].id;
    const workbookId = workbooks[Math.floor(Math.random() * workbooks.length)].id;
    
    // Check if favorite already exists
    const existingFavorite = await prisma.favorite.findUnique({
      where: {
        user_id_workbook_id: {
          user_id: userId,
          workbook_id: workbookId,
        },
      },
    });

    if (!existingFavorite) {
      const favorite = await prisma.favorite.create({
        data: {
          user_id: userId,
          workbook_id: workbookId,
        },
      });
      favorites.push(favorite);
    }
  }

  console.log('✅ Favorites created:', favorites.length);

  // Create some follows
  const follows: any[] = [];
  for (let i = 0; i < 10; i++) {
    const followerId = users[Math.floor(Math.random() * users.length)].id;
    const followingId = users[Math.floor(Math.random() * users.length)].id;
    
    // Don't follow yourself
    if (followerId !== followingId) {
      // Check if follow already exists
      const existingFollow = await prisma.follow.findUnique({
        where: {
          follower_id_following_id: {
            follower_id: followerId,
            following_id: followingId,
          },
        },
      });

      if (!existingFollow) {
        const follow = await prisma.follow.create({
          data: {
            follower_id: followerId,
            following_id: followingId,
          },
        });
        follows.push(follow);
      }
    }
  }

  console.log('✅ Follows created:', follows.length);

  // Create featured items
  const featuredItems: any[] = [];
  const featuredWorkbook = workbooks[0];
  const featuredUser = users[0];

  // Ensure we have users and workbooks
  if (users.length === 0) {
    console.log('❌ No users found, skipping featured items');
    return;
  }
  if (workbooks.length === 0) {
    console.log('❌ No workbooks found, skipping featured items');
    return;
  }

  // Viz of the day
  const vizOfTheDay = await prisma.featuredItem.create({
    data: {
      item_id: featuredWorkbook.id,
      item_type: 'workbook',
      feature_type: 'viz_of_the_day',
      featured_date: new Date(),
      curated_by_admin_id: admin.id,
    },
  });
  featuredItems.push(vizOfTheDay);

  // Featured author
  const featuredAuthor = await prisma.featuredItem.create({
    data: {
      item_id: featuredUser.id,
      item_type: 'user',
      feature_type: 'featured_author',
      featured_date: new Date(),
      curated_by_admin_id: admin.id,
    },
  });
  featuredItems.push(featuredAuthor);

  console.log('✅ Featured items created:', featuredItems.length);

  // Create some workbook views
  const views: any[] = [];
  for (let i = 0; i < 50; i++) {
    const workbookId = workbooks[Math.floor(Math.random() * workbooks.length)].id;
    const userId = Math.random() > 0.3 ? users[Math.floor(Math.random() * users.length)].id : null;
    
    const view = await prisma.workbookView.create({
      data: {
        workbook_id: workbookId,
        user_id: userId,
        ip_address: `192.168.1.${Math.floor(Math.random() * 255)}`,
        user_agent: 'Mozilla/5.0 (compatible; Sigma Playground Bot)',
        referrer: Math.random() > 0.5 ? 'https://google.com' : null,
      },
    });
    views.push(view);
  }

  console.log('✅ Workbook views created:', views.length);

  console.log('🎉 Database seeding completed successfully!');
  console.log(`
📊 Summary:
- Users: ${users.length + 1} (including admin)
- Tags: ${tags.length}
- Workbooks: ${workbooks.length}
- Favorites: ${favorites.length}
- Follows: ${follows.length}
- Featured Items: ${featuredItems.length}
- Views: ${views.length}
  `);
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
