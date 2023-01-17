-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_email` VARCHAR(191) NOT NULL,
    `user_wallet_address` VARCHAR(191) NOT NULL,
    `user_name` VARCHAR(191) NOT NULL,
    `is_creator` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ticket` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `users_user_email_key`(`user_email`),
    UNIQUE INDEX `users_user_wallet_address_key`(`user_wallet_address`),
    UNIQUE INDEX `users_user_name_key`(`user_name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `creator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `creator_id` INTEGER NOT NULL,
    `creator_CA` VARCHAR(191) NULL,
    `creator_abi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tickets` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ticket_name` VARCHAR(191) NOT NULL,
    `ticket_period` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `albums` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `album_name` VARCHAR(191) NOT NULL,
    `singer` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `musics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `music_name` VARCHAR(191) NOT NULL,
    `music_lyrics` VARCHAR(191) NULL,
    `music_genre` VARCHAR(191) NOT NULL,
    `music_maker` VARCHAR(191) NOT NULL,
    `lyrics_maker` VARCHAR(191) NULL,
    `singer` VARCHAR(191) NOT NULL,
    `play_number` INTEGER NOT NULL DEFAULT 0,
    `album_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `funding` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `music_maker_info` VARCHAR(191) NULL,
    `lyrics_maker_info` VARCHAR(191) NULL,
    `singer_info` VARCHAR(191) NOT NULL,
    `music_feel` VARCHAR(191) NOT NULL,
    `funding_info` VARCHAR(191) NOT NULL,
    `sale_date` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `favorites` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `music_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `playlist` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `music_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `creator` ADD CONSTRAINT `creator_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `musics` ADD CONSTRAINT `musics_album_id_fkey` FOREIGN KEY (`album_id`) REFERENCES `albums`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorites` ADD CONSTRAINT `favorites_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `favorites` ADD CONSTRAINT `favorites_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `musics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist` ADD CONSTRAINT `playlist_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `playlist` ADD CONSTRAINT `playlist_music_id_fkey` FOREIGN KEY (`music_id`) REFERENCES `musics`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
