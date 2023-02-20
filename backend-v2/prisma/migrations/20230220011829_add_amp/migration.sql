/*
  Warnings:

  - You are about to drop the column `player_count` on the `funding_music_player` table. All the data in the column will be lost.
  - You are about to drop the column `player_count` on the `normal_music_player` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `funding_music_player` DROP COLUMN `player_count`,
    ADD COLUMN `fm_player_count` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `normal_music_player` DROP COLUMN `player_count`,
    ADD COLUMN `nm_player_count` INTEGER NOT NULL DEFAULT 0;
