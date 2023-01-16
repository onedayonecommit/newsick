/*
  Warnings:

  - Made the column `creator_wallet_address` on table `funding` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `funding_creator_wallet_address_key` ON `funding`;

-- AlterTable
ALTER TABLE `funding` MODIFY `creator_wallet_address` VARCHAR(191) NOT NULL;
