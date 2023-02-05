/*
  Warnings:

  - You are about to drop the column `info` on the `lyrics_maker` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `lyrics_maker` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `lyrics_maker` table. All the data in the column will be lost.
  - You are about to drop the column `info` on the `music_maker` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `music_maker` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `music_maker` table. All the data in the column will be lost.
  - You are about to drop the column `info` on the `singer` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `singer` table. All the data in the column will be lost.
  - You are about to drop the column `sex` on the `singer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `lyrics_maker` DROP COLUMN `info`,
    DROP COLUMN `name`,
    DROP COLUMN `sex`,
    ADD COLUMN `lyrics_info` VARCHAR(5000) NULL DEFAULT '정보 없음',
    ADD COLUMN `lyrics_name` VARCHAR(191) NULL DEFAULT '정보 없음',
    ADD COLUMN `lyrics_sex` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `music_maker` DROP COLUMN `info`,
    DROP COLUMN `name`,
    DROP COLUMN `sex`,
    ADD COLUMN `music_info` VARCHAR(5000) NULL DEFAULT '정보 없음',
    ADD COLUMN `music_name` VARCHAR(191) NULL DEFAULT '정보 없음',
    ADD COLUMN `music_sex` INTEGER NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `singer` DROP COLUMN `info`,
    DROP COLUMN `name`,
    DROP COLUMN `sex`,
    ADD COLUMN `singer_info` VARCHAR(5000) NULL DEFAULT '정보 없음',
    ADD COLUMN `singer_name` VARCHAR(191) NULL DEFAULT '정보 없음',
    ADD COLUMN `singer_sex` INTEGER NULL DEFAULT 0;
