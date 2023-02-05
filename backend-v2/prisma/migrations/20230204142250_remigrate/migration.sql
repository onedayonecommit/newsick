/*
  Warnings:

  - You are about to drop the column `music_genre2` on the `funding_music` table. All the data in the column will be lost.
  - You are about to drop the column `music_genre3` on the `funding_music` table. All the data in the column will be lost.
  - You are about to drop the column `music_genre2` on the `normal_music` table. All the data in the column will be lost.
  - You are about to drop the column `music_genre3` on the `normal_music` table. All the data in the column will be lost.
  - Added the required column `funding_metadata` to the `funding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `album_name` to the `funding_music` table without a default value. This is not possible if the table is not empty.
  - Added the required column `music_path` to the `funding_music` table without a default value. This is not possible if the table is not empty.
  - Added the required column `album_name` to the `normal_music` table without a default value. This is not possible if the table is not empty.
  - Added the required column `music_path` to the `normal_music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funding` ADD COLUMN `funding_metadata` VARCHAR(191) NOT NULL,
    ALTER COLUMN `funding_nft_image` DROP DEFAULT;

-- AlterTable
ALTER TABLE `funding_music` DROP COLUMN `music_genre2`,
    DROP COLUMN `music_genre3`,
    ADD COLUMN `album_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `music_cover_image` VARCHAR(191) NOT NULL DEFAULT 'default_music_image.png',
    ADD COLUMN `music_path` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `normal_music` DROP COLUMN `music_genre2`,
    DROP COLUMN `music_genre3`,
    ADD COLUMN `album_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `music_cover_image` VARCHAR(191) NOT NULL DEFAULT 'default_music_image.png',
    ADD COLUMN `music_path` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `admin` (
    `admin_id` VARCHAR(191) NOT NULL,
    `admin_password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
