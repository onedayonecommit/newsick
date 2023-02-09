/*
  Warnings:

  - You are about to drop the column `music_genre1` on the `normal_music` table. All the data in the column will be lost.
  - Added the required column `music_genre` to the `normal_music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funding_music` ADD COLUMN `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `normal_music` DROP COLUMN `music_genre1`,
    ADD COLUMN `music_genre` VARCHAR(191) NOT NULL;
