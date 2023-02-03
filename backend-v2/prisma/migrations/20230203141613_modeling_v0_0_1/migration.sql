-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(191) NOT NULL,
    `user_wallet_address` VARCHAR(191) NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `user_profile_image` VARCHAR(191) NOT NULL DEFAULT 'default_profile_image.png',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_user_email_key`(`user_email`),
    UNIQUE INDEX `user_user_wallet_address_key`(`user_wallet_address`),
    UNIQUE INDEX `user_user_name_key`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `creator` (
    `creator_id` INTEGER NOT NULL,
    `is_creator` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`creator_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticket` (
    `id` INTEGER NOT NULL,
    `ticket_type` INTEGER NOT NULL DEFAULT 0,
    `expired` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding` (
    `id` INTEGER NOT NULL,
    `creator_id` INTEGER NOT NULL,
    `category` VARCHAR(191) NULL,
    `funding_info` VARCHAR(5000) NOT NULL DEFAULT '소개 내용 없음',
    `funding_nft_image` VARCHAR(191) NOT NULL DEFAULT 'default_nft_image',
    `funding_start_date` INTEGER NOT NULL,
    `funding_finish_date` INTEGER NOT NULL,
    `funding_production_date` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `music_maker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL DEFAULT '정보 없음',
    `sex` INTEGER NULL DEFAULT 0,
    `info` VARCHAR(5000) NULL DEFAULT '정보 없음',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lyrics_maker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL DEFAULT '정보 없음',
    `sex` INTEGER NULL DEFAULT 0,
    `info` VARCHAR(5000) NULL DEFAULT '정보 없음',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `singer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NULL DEFAULT '정보 없음',
    `sex` INTEGER NULL DEFAULT 0,
    `info` VARCHAR(5000) NULL DEFAULT '정보 없음',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding_music` (
    `funding_id` INTEGER NOT NULL,
    `music_name` VARCHAR(191) NOT NULL,
    `music_lyrics` VARCHAR(191) NULL,
    `music_genre1` VARCHAR(191) NOT NULL,
    `music_genre2` VARCHAR(191) NULL,
    `music_genre3` VARCHAR(191) NULL,
    `music_maker` VARCHAR(191) NOT NULL,
    `lyrics_maker` VARCHAR(191) NULL,
    `singer` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`funding_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding_music_player` (
    `music_id` INTEGER NOT NULL,
    `player_count` INTEGER NOT NULL DEFAULT 0,
    `heart` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`music_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `normal_music` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `music_name` VARCHAR(191) NOT NULL,
    `music_lyrics` VARCHAR(191) NULL,
    `music_genre1` VARCHAR(191) NOT NULL,
    `music_genre2` VARCHAR(191) NULL,
    `music_genre3` VARCHAR(191) NULL,
    `music_maker` VARCHAR(191) NOT NULL,
    `lyrics_maker` VARCHAR(191) NULL,
    `singer` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `normal_music_player` (
    `music_id` INTEGER NOT NULL,
    `player_count` INTEGER NOT NULL DEFAULT 0,
    `heart` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`music_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heart_music` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `normal_music_id` INTEGER NOT NULL,
    `funding_music_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `normal_music_id` INTEGER NOT NULL,
    `funding_music_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heart_funding` (
    `funding_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`funding_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `creator` ADD CONSTRAINT `creator_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `ticket_id_fkey` FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding` ADD CONSTRAINT `funding_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `creator`(`creator_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `music_maker` ADD CONSTRAINT `music_maker_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lyrics_maker` ADD CONSTRAINT `lyrics_maker_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `singer` ADD CONSTRAINT `singer_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding_music` ADD CONSTRAINT `funding_music_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding_music_player` ADD CONSTRAINT `funding_music_player_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `funding_music`(`funding_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `normal_music_player` ADD CONSTRAINT `normal_music_player_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `normal_music`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heart_music` ADD CONSTRAINT `heart_music_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heart_music` ADD CONSTRAINT `heart_music_normal_music_id_fkey` FOREIGN KEY (`normal_music_id`) REFERENCES `normal_music`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heart_music` ADD CONSTRAINT `heart_music_funding_music_id_fkey` FOREIGN KEY (`funding_music_id`) REFERENCES `funding_music`(`funding_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist` ADD CONSTRAINT `playlist_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist` ADD CONSTRAINT `playlist_normal_music_id_fkey` FOREIGN KEY (`normal_music_id`) REFERENCES `normal_music`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist` ADD CONSTRAINT `playlist_funding_music_id_fkey` FOREIGN KEY (`funding_music_id`) REFERENCES `funding_music`(`funding_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heart_funding` ADD CONSTRAINT `heart_funding_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heart_funding` ADD CONSTRAINT `heart_funding_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
