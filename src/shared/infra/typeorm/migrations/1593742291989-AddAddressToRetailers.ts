import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddAddressToRetailers1593742291989 implements MigrationInterface {
 public async up(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.addColumns('retailers', [
   new TableColumn({
    name: 'latitude',
    type: 'decimal',
    precision: 9,
    scale: 7,
   }),
   new TableColumn({
    name: 'longitude',
    type: 'decimal',
    precision: 10,
    scale: 7,
   }),
  ]);
 }

 public async down(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.dropColumn('retailers', 'latitude');
  await queryRunner.dropColumn('retailers', 'longitude');
 }
}
