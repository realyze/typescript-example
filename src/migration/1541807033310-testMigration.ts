import {MigrationInterface, QueryRunner} from "typeorm";

export class testMigration1541807033310 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "myLittleBrokenArray"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "myLittleBrokenArray" character varying(25) array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "myLittleBrokenArray"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "myLittleBrokenArray" character varying array NOT NULL`);
    }

}
