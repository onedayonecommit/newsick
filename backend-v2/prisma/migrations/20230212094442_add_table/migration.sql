-- CreateTable
CREATE TABLE `heart_nft` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` VARCHAR(191) NOT NULL,
    `funding_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `heart_nft` ADD CONSTRAINT `heart_nft_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user`(`user_wallet_address`) ON DELETE RESTRICT ON UPDATE CASCADE;
