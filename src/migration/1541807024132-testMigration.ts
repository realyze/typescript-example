import {MigrationInterface, QueryRunner} from "typeorm";

export class testMigration1541807024132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "text" text NOT NULL, "myLittleBrokenArray" character varying(25) array NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post_categories_category" ("postId" integer NOT NULL, "categoryId" integer NOT NULL, CONSTRAINT "PK_91306c0021c4901c1825ef097ce" PRIMARY KEY ("postId", "categoryId"))`);
        await queryRunner.query(`ALTER TABLE "post_categories_category" ADD CONSTRAINT "FK_93b566d522b73cb8bc46f7405bd" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE`);
        await queryRunner.query(`ALTER TABLE "post_categories_category" ADD CONSTRAINT "FK_a5e63f80ca58e7296d5864bd2d3" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "post_categories_category" DROP CONSTRAINT "FK_a5e63f80ca58e7296d5864bd2d3"`);
        await queryRunner.query(`ALTER TABLE "post_categories_category" DROP CONSTRAINT "FK_93b566d522b73cb8bc46f7405bd"`);
        await queryRunner.query(`DROP TABLE "post_categories_category"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "category"`);
    }

}
