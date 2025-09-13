-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_featured_items" (
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
    CONSTRAINT "featured_items_curated_by_admin_id_fkey" FOREIGN KEY ("curated_by_admin_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_featured_items" ("created_at", "curated_by_admin_id", "expires_at", "feature_type", "featured_date", "id", "is_active", "item_id", "item_type", "updated_at") SELECT "created_at", "curated_by_admin_id", "expires_at", "feature_type", "featured_date", "id", "is_active", "item_id", "item_type", "updated_at" FROM "featured_items";
DROP TABLE "featured_items";
ALTER TABLE "new_featured_items" RENAME TO "featured_items";
CREATE INDEX "featured_items_item_id_idx" ON "featured_items"("item_id");
CREATE INDEX "featured_items_feature_type_idx" ON "featured_items"("feature_type");
CREATE INDEX "featured_items_featured_date_idx" ON "featured_items"("featured_date");
CREATE INDEX "featured_items_is_active_idx" ON "featured_items"("is_active");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
