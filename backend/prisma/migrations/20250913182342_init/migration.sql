-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "full_name" TEXT,
    "bio" TEXT,
    "title" TEXT,
    "organization" TEXT,
    "location" TEXT,
    "social_links" JSONB,
    "profile_image_url" TEXT,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "last_login_at" DATETIME,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "workbooks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "sigma_embed_url" TEXT NOT NULL,
    "thumbnail_url" TEXT,
    "is_publicly_visible" BOOLEAN NOT NULL DEFAULT true,
    "allow_copy" BOOLEAN NOT NULL DEFAULT true,
    "view_count" INTEGER NOT NULL DEFAULT 0,
    "favorite_count" INTEGER NOT NULL DEFAULT 0,
    "is_featured" BOOLEAN NOT NULL DEFAULT false,
    "featured_at" DATETIME,
    "published_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "author_id" TEXT NOT NULL,
    CONSTRAINT "workbooks_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "tags" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "color" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "workbook_tags" (
    "workbook_id" TEXT NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("workbook_id", "tag_id"),
    CONSTRAINT "workbook_tags_workbook_id_fkey" FOREIGN KEY ("workbook_id") REFERENCES "workbooks" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "workbook_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "favorites" (
    "user_id" TEXT NOT NULL,
    "workbook_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("user_id", "workbook_id"),
    CONSTRAINT "favorites_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "favorites_workbook_id_fkey" FOREIGN KEY ("workbook_id") REFERENCES "workbooks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "follows" (
    "follower_id" TEXT NOT NULL,
    "following_id" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("follower_id", "following_id"),
    CONSTRAINT "follows_follower_id_fkey" FOREIGN KEY ("follower_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "follows_following_id_fkey" FOREIGN KEY ("following_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "featured_items" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "item_id" TEXT NOT NULL,
    "item_type" TEXT NOT NULL,
    "feature_type" TEXT NOT NULL,
    "featured_date" DATETIME NOT NULL,
    "expires_at" DATETIME,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "curated_by_admin_id" TEXT NOT NULL,
    CONSTRAINT "featured_items_curated_by_admin_id_fkey" FOREIGN KEY ("curated_by_admin_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "featured_items_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "workbooks" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "reports" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "report_type" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "admin_notes" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "reporter_id" TEXT NOT NULL,
    "reported_user_id" TEXT,
    "reported_workbook_id" TEXT,
    CONSTRAINT "reports_reporter_id_fkey" FOREIGN KEY ("reporter_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "reports_reported_user_id_fkey" FOREIGN KEY ("reported_user_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "reports_reported_workbook_id_fkey" FOREIGN KEY ("reported_workbook_id") REFERENCES "workbooks" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "refresh_tokens" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "expires_at" DATETIME NOT NULL,
    "is_revoked" BOOLEAN NOT NULL DEFAULT false,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,
    CONSTRAINT "refresh_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "workbook_views" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "workbook_id" TEXT NOT NULL,
    "user_id" TEXT,
    "ip_address" TEXT,
    "user_agent" TEXT,
    "referrer" TEXT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "workbook_views_workbook_id_fkey" FOREIGN KEY ("workbook_id") REFERENCES "workbooks" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_username_idx" ON "users"("username");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_created_at_idx" ON "users"("created_at");

-- CreateIndex
CREATE INDEX "users_is_active_idx" ON "users"("is_active");

-- CreateIndex
CREATE INDEX "workbooks_author_id_idx" ON "workbooks"("author_id");

-- CreateIndex
CREATE INDEX "workbooks_published_at_idx" ON "workbooks"("published_at");

-- CreateIndex
CREATE INDEX "workbooks_is_publicly_visible_idx" ON "workbooks"("is_publicly_visible");

-- CreateIndex
CREATE INDEX "workbooks_is_featured_idx" ON "workbooks"("is_featured");

-- CreateIndex
CREATE INDEX "workbooks_view_count_idx" ON "workbooks"("view_count");

-- CreateIndex
CREATE INDEX "workbooks_favorite_count_idx" ON "workbooks"("favorite_count");

-- CreateIndex
CREATE UNIQUE INDEX "tags_name_key" ON "tags"("name");

-- CreateIndex
CREATE INDEX "tags_name_idx" ON "tags"("name");

-- CreateIndex
CREATE INDEX "tags_is_active_idx" ON "tags"("is_active");

-- CreateIndex
CREATE INDEX "workbook_tags_tag_id_idx" ON "workbook_tags"("tag_id");

-- CreateIndex
CREATE INDEX "favorites_user_id_idx" ON "favorites"("user_id");

-- CreateIndex
CREATE INDEX "favorites_workbook_id_idx" ON "favorites"("workbook_id");

-- CreateIndex
CREATE INDEX "favorites_created_at_idx" ON "favorites"("created_at");

-- CreateIndex
CREATE INDEX "follows_follower_id_idx" ON "follows"("follower_id");

-- CreateIndex
CREATE INDEX "follows_following_id_idx" ON "follows"("following_id");

-- CreateIndex
CREATE INDEX "follows_created_at_idx" ON "follows"("created_at");

-- CreateIndex
CREATE INDEX "featured_items_item_id_idx" ON "featured_items"("item_id");

-- CreateIndex
CREATE INDEX "featured_items_feature_type_idx" ON "featured_items"("feature_type");

-- CreateIndex
CREATE INDEX "featured_items_featured_date_idx" ON "featured_items"("featured_date");

-- CreateIndex
CREATE INDEX "featured_items_is_active_idx" ON "featured_items"("is_active");

-- CreateIndex
CREATE INDEX "reports_report_type_idx" ON "reports"("report_type");

-- CreateIndex
CREATE INDEX "reports_status_idx" ON "reports"("status");

-- CreateIndex
CREATE INDEX "reports_created_at_idx" ON "reports"("created_at");

-- CreateIndex
CREATE UNIQUE INDEX "refresh_tokens_token_key" ON "refresh_tokens"("token");

-- CreateIndex
CREATE INDEX "refresh_tokens_user_id_idx" ON "refresh_tokens"("user_id");

-- CreateIndex
CREATE INDEX "refresh_tokens_expires_at_idx" ON "refresh_tokens"("expires_at");

-- CreateIndex
CREATE INDEX "refresh_tokens_is_revoked_idx" ON "refresh_tokens"("is_revoked");

-- CreateIndex
CREATE INDEX "workbook_views_workbook_id_idx" ON "workbook_views"("workbook_id");

-- CreateIndex
CREATE INDEX "workbook_views_user_id_idx" ON "workbook_views"("user_id");

-- CreateIndex
CREATE INDEX "workbook_views_created_at_idx" ON "workbook_views"("created_at");
