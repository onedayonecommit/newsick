/*
  Warnings:

  - Changed the type of `funding_price` on the `funding` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `funding` DROP COLUMN `funding_price`,
    ADD COLUMN `funding_price` DECIMAL(24, 18) NOT NULL;
