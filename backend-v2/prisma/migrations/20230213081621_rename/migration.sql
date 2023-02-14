-- AlterTable
ALTER TABLE `funding_music` MODIFY `music_name` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `music_genre` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `music_maker` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `album_name` VARCHAR(191) NULL,
    MODIFY `music_path` VARCHAR(191) NOT NULL DEFAULT '';
