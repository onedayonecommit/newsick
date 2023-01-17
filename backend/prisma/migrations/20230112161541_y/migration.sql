-- AlterTable
ALTER TABLE `funding` MODIFY `music_feel` INTEGER NULL DEFAULT 0,
    MODIFY `funding_info` VARCHAR(10000) NULL,
    MODIFY `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `funding_cover_image` VARCHAR(191) NULL DEFAULT 'default_profile_image.png',
    MODIFY `start_date` DATETIME(3) NULL,
    MODIFY `sale_date` DATETIME(3) NULL;
