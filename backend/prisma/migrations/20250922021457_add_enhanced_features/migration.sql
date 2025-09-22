/*
  Warnings:

  - Added the required column `name` to the `workbooks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `workbooks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "user_follows" (
    "follower_id" TEXT NOT NULL,
    "following_id" TEXT NOT NULL,
    "followed_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("follower_id", "following_id"),
    CONSTRAINT "user_follows_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "user_follows_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "workbook_templates" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "category" TEXT NOT NULL,
    "thumbnail" TEXT,
    "isPopular" BOOLEAN NOT NULL DEFAULT false,
    "isPublic" BOOLEAN NOT NULL DEFAULT true,
    "estimatedTime" TEXT,
    "difficulty" TEXT,
    "usageCount" INTEGER NOT NULL DEFAULT 0,
    "createdBy" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "template_tags" (
    "templateId" TEXT NOT NULL,
    "tagId" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("templateId", "tagId"),
    CONSTRAINT "template_tags_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "workbook_templates" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "template_tags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "workbook_favorites" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workbookId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "favoritedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "workbook_favorites_workbookId_fkey" FOREIGN KEY ("workbookId") REFERENCES "workbooks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "workbook_favorites_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "workbook_shares" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workbookId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "sharedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "workbook_shares_workbookId_fkey" FOREIGN KEY ("workbookId") REFERENCES "workbooks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "workbook_shares_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "export_schedules" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "workbookId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cronExpression" TEXT,
    "status" TEXT NOT NULL DEFAULT 'active',
    "lastRun" DATETIME,
    "nextRun" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "export_schedules_workbookId_fkey" FOREIGN KEY ("workbookId") REFERENCES "workbooks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "export_schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "workbookId" TEXT,
    "targetUserId" TEXT,
    "challengeId" TEXT,
    "metadata" JSONB,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "activity_logs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "activity_logs_workbookId_fkey" FOREIGN KEY ("workbookId") REFERENCES "workbooks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "community_challenges" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "prize" TEXT,
    "status" TEXT NOT NULL DEFAULT 'upcoming',
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "challenge_participations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "joinedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'active',
    CONSTRAINT "challenge_participations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "challenge_participations_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "community_challenges" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_workbooks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "sigma_embed_url" TEXT,
    "sigma_workbook_id" TEXT,
    "thumbnail_url" TEXT,
    "is_public" BOOLEAN NOT NULL DEFAULT true,
    "is_publicly_visible" BOOLEAN NOT NULL DEFAULT true,
    "allow_copy" BOOLEAN NOT NULL DEFAULT true,
    "allow_comments" BOOLEAN NOT NULL DEFAULT true,
    "allow_sharing" BOOLEAN NOT NULL DEFAULT true,
    "view_count" INTEGER NOT NULL DEFAULT 0,
    "favorite_count" INTEGER NOT NULL DEFAULT 0,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "featured_at" DATETIME,
    "status" TEXT NOT NULL DEFAULT 'DRAFT',
    "published_at" DATETIME,
    "updated_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "templateId" TEXT,
    CONSTRAINT "workbooks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "workbooks_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "workbooks_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "workbook_templates" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_workbooks" ("allow_copy", "author_id", "description", "favorite_count", "featured_at", "id", "is_featured", "is_publicly_visible", "published_at", "sigma_embed_url", "sigma_workbook_id", "thumbnail_url", "title", "updated_at", "view_count", "name", "userId") SELECT "allow_copy", "author_id", "description", "favorite_count", "featured_at", "id", "is_featured", "is_publicly_visible", "published_at", "sigma_embed_url", "sigma_workbook_id", "thumbnail_url", "title", "updated_at", "view_count", COALESCE("title", 'Untitled Workbook'), "author_id" FROM "workbooks";
DROP TABLE "workbooks";
ALTER TABLE "new_workbooks" RENAME TO "workbooks";
CREATE INDEX "workbooks_userId_idx" ON "workbooks"("userId");
CREATE INDEX "workbooks_author_id_idx" ON "workbooks"("author_id");
CREATE INDEX "workbooks_published_at_idx" ON "workbooks"("published_at");
CREATE INDEX "workbooks_is_public_idx" ON "workbooks"("is_public");
CREATE INDEX "workbooks_is_publicly_visible_idx" ON "workbooks"("is_publicly_visible");
CREATE INDEX "workbooks_is_featured_idx" ON "workbooks"("is_featured");
CREATE INDEX "workbooks_view_count_idx" ON "workbooks"("view_count");
CREATE INDEX "workbooks_favorite_count_idx" ON "workbooks"("favorite_count");
CREATE INDEX "workbooks_status_idx" ON "workbooks"("status");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "user_follows_follower_id_idx" ON "user_follows"("follower_id");

-- CreateIndex
CREATE INDEX "user_follows_following_id_idx" ON "user_follows"("following_id");

-- CreateIndex
CREATE INDEX "user_follows_followed_at_idx" ON "user_follows"("followed_at");

-- CreateIndex
CREATE INDEX "workbook_templates_category_idx" ON "workbook_templates"("category");

-- CreateIndex
CREATE INDEX "workbook_templates_isPopular_idx" ON "workbook_templates"("isPopular");

-- CreateIndex
CREATE INDEX "workbook_templates_usageCount_idx" ON "workbook_templates"("usageCount");

-- CreateIndex
CREATE INDEX "template_tags_tagId_idx" ON "template_tags"("tagId");

-- CreateIndex
CREATE INDEX "workbook_favorites_workbookId_idx" ON "workbook_favorites"("workbookId");

-- CreateIndex
CREATE INDEX "workbook_favorites_userId_idx" ON "workbook_favorites"("userId");

-- CreateIndex
CREATE INDEX "workbook_favorites_favoritedAt_idx" ON "workbook_favorites"("favoritedAt");

-- CreateIndex
CREATE UNIQUE INDEX "workbook_favorites_workbookId_userId_key" ON "workbook_favorites"("workbookId", "userId");

-- CreateIndex
CREATE INDEX "workbook_shares_workbookId_idx" ON "workbook_shares"("workbookId");

-- CreateIndex
CREATE INDEX "workbook_shares_userId_idx" ON "workbook_shares"("userId");

-- CreateIndex
CREATE INDEX "workbook_shares_sharedAt_idx" ON "workbook_shares"("sharedAt");

-- CreateIndex
CREATE INDEX "export_schedules_userId_idx" ON "export_schedules"("userId");

-- CreateIndex
CREATE INDEX "export_schedules_workbookId_idx" ON "export_schedules"("workbookId");

-- CreateIndex
CREATE INDEX "export_schedules_status_idx" ON "export_schedules"("status");

-- CreateIndex
CREATE INDEX "export_schedules_nextRun_idx" ON "export_schedules"("nextRun");

-- CreateIndex
CREATE INDEX "activity_logs_userId_idx" ON "activity_logs"("userId");

-- CreateIndex
CREATE INDEX "activity_logs_type_idx" ON "activity_logs"("type");

-- CreateIndex
CREATE INDEX "activity_logs_workbookId_idx" ON "activity_logs"("workbookId");

-- CreateIndex
CREATE INDEX "activity_logs_created_at_idx" ON "activity_logs"("created_at");

-- CreateIndex
CREATE INDEX "community_challenges_status_idx" ON "community_challenges"("status");

-- CreateIndex
CREATE INDEX "community_challenges_startDate_idx" ON "community_challenges"("startDate");

-- CreateIndex
CREATE INDEX "community_challenges_endDate_idx" ON "community_challenges"("endDate");

-- CreateIndex
CREATE INDEX "challenge_participations_userId_idx" ON "challenge_participations"("userId");

-- CreateIndex
CREATE INDEX "challenge_participations_challengeId_idx" ON "challenge_participations"("challengeId");

-- CreateIndex
CREATE INDEX "challenge_participations_joinedAt_idx" ON "challenge_participations"("joinedAt");

-- CreateIndex
CREATE UNIQUE INDEX "challenge_participations_userId_challengeId_key" ON "challenge_participations"("userId", "challengeId");
