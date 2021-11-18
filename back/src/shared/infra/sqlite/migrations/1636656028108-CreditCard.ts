import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreditCard1636656028108 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "credit_card",
            columns: [
                {name: 'id', type: 'integer', isPrimary: true},
                {name: 'name', type: 'string'},
                {name: 'function', type: 'string'},
                {name: 'accountId', type: 'integer'},               
            ]
        }))
        await queryRunner.createForeignKey('credit_card', new TableForeignKey({
            columnNames: ['accountId'],
            referencedTableName: 'account',
            referencedColumnNames: ['id']   

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('CreditCard')
    }

}
