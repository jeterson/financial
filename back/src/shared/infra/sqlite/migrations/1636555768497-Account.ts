import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Account1636555768497 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "Account",
            columns: [
                {name: 'id', type: 'integer', isPrimary: true},
                {name: 'name', type: 'string'},
                {name: 'agency', type: 'string'},
                {name: 'accountNumber', type: 'string'},
                {name: 'holder', type: 'string'},
                {name: 'openingBalance', type: 'decimal'},
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('account')
    }

}
