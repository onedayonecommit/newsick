/*
  Warnings:

  - Added the required column `nft_name` to the `funding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funding` ADD COLUMN `nft_name` VARCHAR(191) NOT NULL;
