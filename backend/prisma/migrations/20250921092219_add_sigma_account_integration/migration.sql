/*
  Warnings:

  - A unique constraint covering the columns `[sigma_member_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN "sigma_account_created_at" DATETIME;
ALTER TABLE "users" ADD COLUMN "sigma_member_id" TEXT;
ALTER TABLE "users" ADD COLUMN "sigma_member_type" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "users_sigma_member_id_key" ON "users"("sigma_member_id");
