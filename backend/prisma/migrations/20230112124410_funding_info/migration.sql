/*
  Warnings:

  - You are about to drop the column `lyrics_maker_info` on the `funding` table. All the data in the column will be lost.
  - You are about to drop the column `music_maker_info` on the `funding` table. All the data in the column will be lost.
  - You are about to drop the column `singer_info` on the `funding` table. All the data in the column will be lost.
  - You are about to alter the column `music_feel` on the `funding` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `funding` DROP COLUMN `lyrics_maker_info`,
    DROP COLUMN `music_maker_info`,
    DROP COLUMN `singer_info`,
    ADD COLUMN `lyrics_maker_info_url` VARCHAR(191) NULL,
    ADD COLUMN `music_maker_info_url` VARCHAR(191) NULL,
    ADD COLUMN `singer_info_url` VARCHAR(191) NULL,
    MODIFY `music_feel` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `funding_music_maker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `sex` VARCHAR(191) NULL,
    `age` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding_lyrics_maker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `sex` VARCHAR(191) NULL,
    `age` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding_singer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL,
    `sex` VARCHAR(191) NULL,
    `age` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `funding_music_maker` ADD CONSTRAINT `funding_music_maker_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding_lyrics_maker` ADD CONSTRAINT `funding_lyrics_maker_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding_singer` ADD CONSTRAINT `funding_singer_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
