/*
  Warnings:

  - You are about to alter the column `holder_share` on the `funding` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal(16,10)`.

*/
-- AlterTable
ALTER TABLE `funding` MODIFY `holder_share` DECIMAL(16, 10) NOT NULL;
