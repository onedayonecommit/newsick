/*
  Warnings:

  - A unique constraint covering the columns `[creator_wallet_address]` on the table `funding` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creator_id` to the `funding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funding` ADD COLUMN `creator_id` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `funding_creator_wallet_address_key` ON `funding`(`creator_wallet_address`);

-- AddForeignKey
ALTER TABLE `funding` ADD CONSTRAINT `funding_creator_id_fkey` FOREIGN KEY (`creator_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
