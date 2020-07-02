import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddCPFandEmailToUsers1593722509791 implements MigrationInterface {
 public async up(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.addColumns('users', [
   new TableColumn({
    name: 'email',
    type: 'varchar',
   }),
   new TableColumn({
    name: 'cpf',
    type: 'bigint',
    isUnique: true,
   }),
  ]);
 }

 public async down(queryRunner: QueryRunner): Promise<void> {
  await queryRunner.dropColumn('users', 'email');
  await queryRunner.dropColumn('users', 'cpf');
 }
}
