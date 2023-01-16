/*
  Warnings:

  - You are about to alter the column `age` on the `funding_lyrics_maker` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `age` on the `funding_music_maker` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `age` on the `funding_singer` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `creator_wallet_address` to the `funding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `funding` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `sale_date` on the `funding` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `about_me` to the `funding_singer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funding` ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `creator_wallet_address` VARCHAR(191) NOT NULL,
    ADD COLUMN `funding_cover_image` VARCHAR(191) NOT NULL DEFAULT 'default_profile_image.png',
    ADD COLUMN `start_date` DATETIME(3) NOT NULL,
    MODIFY `category` VARCHAR(191) NULL,
    MODIFY `music_feel` INTEGER NOT NULL DEFAULT 0,
    MODIFY `funding_info` VARCHAR(10000) NOT NULL,
    DROP COLUMN `sale_date`,
    ADD COLUMN `sale_date` DATETIME(3) NOT NULL,
    MODIFY `lyrics_maker_info_url` VARCHAR(300) NULL,
    MODIFY `music_maker_info_url` VARCHAR(300) NULL,
    MODIFY `singer_info_url` VARCHAR(300) NULL;

-- AlterTable
ALTER TABLE `funding_lyrics_maker` ADD COLUMN `about_me` VARCHAR(3000) NULL,
    MODIFY `age` INTEGER NULL;

-- AlterTable
ALTER TABLE `funding_music_maker` ADD COLUMN `about_me` VARCHAR(3000) NULL,
    MODIFY `age` INTEGER NULL;

-- AlterTable
ALTER TABLE `funding_singer` ADD COLUMN `about_me` VARCHAR(3000) NOT NULL,
    MODIFY `age` INTEGER NULL;
