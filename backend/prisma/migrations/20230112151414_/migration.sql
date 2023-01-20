/*
  Warnings:

  - A unique constraint covering the columns `[creator_wallet_address]` on the table `funding` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `funding_creator_wallet_address_key` ON `funding`(`creator_wallet_address`);
