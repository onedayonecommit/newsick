/*
  Warnings:

  - You are about to drop the `funding_music_players` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `normal_music_players` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `funding_music_players` DROP FOREIGN KEY `funding_music_players_music_id_fkey`;

-- DropForeignKey
ALTER TABLE `normal_music_players` DROP FOREIGN KEY `normal_music_players_music_id_fkey`;

-- DropTable
DROP TABLE `funding_music_players`;

-- DropTable
DROP TABLE `normal_music_players`;

-- CreateTable
CREATE TABLE `funding_music_player` (
    `music_id` INTEGER NOT NULL,
    `player_count` INTEGER NOT NULL DEFAULT 0,
    `heart` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`music_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `normal_music_player` (
    `music_id` INTEGER NOT NULL,
    `player_count` INTEGER NOT NULL DEFAULT 0,
    `heart` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`music_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `funding_music_player` ADD CONSTRAINT `funding_music_player_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `funding_music`(`funding_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normal_music_player` ADD CONSTRAINT `normal_music_player_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `normal_music`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
