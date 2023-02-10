/*
  Warnings:

  - You are about to drop the column `music_genre1` on the `funding_music` table. All the data in the column will be lost.
  - Added the required column `music_genre` to the `funding_music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funding_music` DROP COLUMN `music_genre`,
    ADD COLUMN `music_genre` VARCHAR(191) NOT NULL,
    ADD COLUMN `pending_status` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `music_lyrics` VARCHAR(5000) NULL;
