-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(191) NOT NULL,
    `user_wallet_address` VARCHAR(191) NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `user_profile_image` VARCHAR(191) NOT NULL DEFAULT 'default_profile_image.jpeg',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `user_user_email_key`(`user_email`),
    UNIQUE INDEX `user_user_wallet_address_key`(`user_wallet_address`),
    UNIQUE INDEX `user_user_name_key`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `admin` (
    `admin_id` VARCHAR(191) NOT NULL,
    `admin_password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`admin_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `creator` (
    `creator_id` VARCHAR(191) NOT NULL,
    `is_creator` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`creator_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ticket` (
    `id` VARCHAR(191) NOT NULL,
    `ticket_type` INTEGER NOT NULL DEFAULT 0,
    `expired` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding` (
    `id` INTEGER NOT NULL,
    `creator_id` VARCHAR(191) NOT NULL,
    `funding_title` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NULL,
    `funding_info` VARCHAR(5000) NOT NULL DEFAULT '소개 내용 없음',
    `funding_nft_image` VARCHAR(191) NOT NULL,
    `funding_metadata` VARCHAR(191) NOT NULL,
    `funding_start_date` TIMESTAMP(3) NOT NULL,
    `funding_finish_date` TIMESTAMP(3) NOT NULL,
    `funding_production_date` TIMESTAMP(3) NOT NULL,
    `discord_address` VARCHAR(191) NOT NULL,
    `nft_name` VARCHAR(191) NOT NULL,
    `created_at` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `funding_price` DECIMAL(24, 18) NOT NULL,
    `funding_hard_cap` INTEGER NOT NULL,
    `funding_sales` INTEGER NOT NULL DEFAULT 0,
    `funding_heart` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding_notice` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `creator_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `title` VARCHAR(100) NOT NULL,
    `content` VARCHAR(5000) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `music_maker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `music_name` VARCHAR(191) NULL DEFAULT '정보 없음',
    `music_info` VARCHAR(5000) NULL DEFAULT '정보 없음',
    `music_sns_address` VARCHAR(191) NULL DEFAULT '정보 없음',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lyrics_maker` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `lyrics_name` VARCHAR(191) NULL DEFAULT '정보 없음',
    `lyrics_info` VARCHAR(5000) NULL DEFAULT '정보 없음',
    `lyrics_sns_address` VARCHAR(191) NULL DEFAULT '정보 없음',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `singer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `funding_id` INTEGER NOT NULL,
    `singer_name` VARCHAR(191) NULL DEFAULT '정보 없음',
    `singer_info` VARCHAR(5000) NULL DEFAULT '정보 없음',
    `singer_sns_address` VARCHAR(191) NULL DEFAULT '정보 없음',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding_music` (
    `funding_id` INTEGER NOT NULL,
    `music_name` VARCHAR(191) NOT NULL DEFAULT '',
    `music_lyrics` VARCHAR(5000) NULL,
    `music_genre` VARCHAR(191) NOT NULL DEFAULT '',
    `music_maker` VARCHAR(191) NOT NULL DEFAULT '',
    `lyrics_maker` VARCHAR(191) NULL,
    `singer` VARCHAR(191) NULL,
    `music_cover_image` VARCHAR(191) NOT NULL DEFAULT 'default_music_image.png',
    `album_name` VARCHAR(191) NULL,
    `title` BOOLEAN NOT NULL DEFAULT false,
    `music_path` VARCHAR(191) NOT NULL DEFAULT '',
    `pending_status` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

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
    `singer` VARCHAR(191) NULL,
    `music_lyrics` VARCHAR(191) NULL,
    `lyrics_maker` VARCHAR(191) NULL,
    `music_maker` VARCHAR(191) NOT NULL,
    `music_genre` VARCHAR(191) NOT NULL,
    `music_cover_image` VARCHAR(191) NOT NULL DEFAULT 'default_music_image.png',
    `album_name` VARCHAR(191) NOT NULL,
    `title` BOOLEAN NOT NULL DEFAULT false,
    `music_path` VARCHAR(191) NOT NULL,
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
    `user_id` VARCHAR(191) NOT NULL,
    `normal_music_id` INTEGER NULL,
    `funding_music_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NOT NULL,
    `normal_music_id` INTEGER NULL,
    `funding_music_id` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heart_funding` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NOT NULL,
    `funding_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `heart_nft` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NOT NULL,
    `funding_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `creator` ADD CONSTRAINT `creator_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `user`(`user_wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ticket` ADD CONSTRAINT `ticket_id_fkey` FOREIGN KEY (`id`) REFERENCES `user`(`user_wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding` ADD CONSTRAINT `funding_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `creator`(`creator_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding_notice` ADD CONSTRAINT `funding_notice_funding_id_fkey` FOREIGN KEY (`funding_id`) REFERENCES `funding`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `funding_notice` ADD CONSTRAINT `funding_notice_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `user`(`user_wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;

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
ALTER TABLE `heart_music` ADD CONSTRAINT `heart_music_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist` ADD CONSTRAINT `playlist_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heart_funding` ADD CONSTRAINT `heart_funding_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `heart_nft` ADD CONSTRAINT `heart_nft_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;
