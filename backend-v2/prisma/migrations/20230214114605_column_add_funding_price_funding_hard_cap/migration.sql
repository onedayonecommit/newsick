/*
  Warnings:

  - Added the required column `funding_hard_cap` to the `funding` table without a default value. This is not possible if the table is not empty.
  - Added the required column `funding_price` to the `funding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funding` ADD COLUMN `funding_hard_cap` INTEGER NOT NULL,
    ADD COLUMN `funding_price` INTEGER NOT NULL;
