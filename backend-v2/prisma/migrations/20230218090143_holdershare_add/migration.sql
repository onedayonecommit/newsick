/*
  Warnings:

  - Added the required column `holder_share` to the `funding` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `funding` ADD COLUMN `holder_share` INTEGER NOT NULL;
