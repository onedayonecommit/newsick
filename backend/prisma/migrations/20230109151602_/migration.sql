/*
  Warnings:

  - You are about to drop the column `profile_image` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `profile_image`,
    ADD COLUMN `user_profile_image` VARCHAR(191) NOT NULL DEFAULT '';
