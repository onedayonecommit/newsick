/*
  Warnings:

  - Changed the type of `funding_start_date` on the `funding` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `funding_finish_date` on the `funding` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `funding_production_date` on the `funding` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE `funding` DROP COLUMN `funding_start_date`,
    ADD COLUMN `funding_start_date` TIMESTAMP(3) NOT NULL,
    DROP COLUMN `funding_finish_date`,
    ADD COLUMN `funding_finish_date` TIMESTAMP(3) NOT NULL,
    DROP COLUMN `funding_production_date`,
    ADD COLUMN `funding_production_date` TIMESTAMP(3) NOT NULL,
    MODIFY `created_at` TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
