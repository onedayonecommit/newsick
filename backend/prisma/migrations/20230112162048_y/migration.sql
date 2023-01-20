/*
  Warnings:

  - You are about to drop the column `funding_id` on the `funding_lyrics_maker` table. All the data in the column will be lost.
  - You are about to drop the column `funding_id` on the `funding_music_maker` table. All the data in the column will be lost.
  - You are about to drop the column `funding_id` on the `funding_singer` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `funding_lyrics_maker` DROP FOREIGN KEY `funding_lyrics_maker_funding_id_fkey`;

-- DropForeignKey
ALTER TABLE `funding_music_maker` DROP FOREIGN KEY `funding_music_maker_funding_id_fkey`;

-- DropForeignKey
ALTER TABLE `funding_singer` DROP FOREIGN KEY `funding_singer_funding_id_fkey`;

-- AlterTable
ALTER TABLE `funding_lyrics_maker` DROP COLUMN `funding_id`;

-- AlterTable
ALTER TABLE `funding_music_maker` DROP COLUMN `funding_id`;

-- AlterTable
ALTER TABLE `funding_singer` DROP COLUMN `funding_id`;
