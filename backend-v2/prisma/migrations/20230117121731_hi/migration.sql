/*
  Warnings:

  - You are about to drop the column `lyrics_maker_info_url` on the `funding` table. All the data in the column will be lost.
  - You are about to drop the column `music_maker_info_url` on the `funding` table. All the data in the column will be lost.
  - You are about to drop the column `singer_info_url` on the `funding` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `funding` DROP COLUMN `lyrics_maker_info_url`,
    DROP COLUMN `music_maker_info_url`,
    DROP COLUMN `singer_info_url`;

-- AlterTable
ALTER TABLE `funding_lyrics_maker` ADD COLUMN `lyrics_maker_info_url` VARCHAR(300) NULL;

-- AlterTable
ALTER TABLE `funding_music_maker` ADD COLUMN `music_maker_info_url` VARCHAR(300) NULL;

-- AlterTable
ALTER TABLE `funding_singer` ADD COLUMN `singer_info_url` VARCHAR(300) NULL;

-- CreateTable
CREATE TABLE `pending_creator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `creator_info` VARCHAR(5000) NOT NULL,
    `pending_status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pending_creator` ADD CONSTRAINT `pending_creator_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
