/*
  Warnings:

  - Made the column `music_feel` on table `funding` required. This step will fail if there are existing NULL values in that column.
  - Made the column `funding_info` on table `funding` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `funding` required. This step will fail if there are existing NULL values in that column.
  - Made the column `funding_cover_image` on table `funding` required. This step will fail if there are existing NULL values in that column.
  - Made the column `start_date` on table `funding` required. This step will fail if there are existing NULL values in that column.
  - Made the column `sale_date` on table `funding` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `funding_id` to the `funding_lyrics_maker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funding_id` to the `funding_music_maker` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funding_id` to the `funding_singer` table without a default value. This is not possible if the table is not empty.
  - Made the column `about_me` on table `funding_singer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `funding` MODIFY `music_feel` INTEGER NOT NULL DEFAULT 0,
    MODIFY `funding_info` VARCHAR(10000) NOT NULL,
    MODIFY `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `funding_cover_image` VARCHAR(191) NOT NULL DEFAULT 'default_profile_image.png',
    MODIFY `start_date` DATETIME(3) NOT NULL,
    MODIFY `sale_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `funding_lyrics_maker` ADD COLUMN `funding_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `funding_music_maker` ADD COLUMN `funding_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `funding_singer` ADD COLUMN `funding_id` INTEGER NOT NULL,
    MODIFY `about_me` VARCHAR(3000) NOT NULL;

-- AddForeignKey
ALTER TABLE `funding_music_maker` ADD CONSTRAINT `funding_music_maker_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding_lyrics_maker` ADD CONSTRAINT `funding_lyrics_maker_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding_singer` ADD CONSTRAINT `funding_singer_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
