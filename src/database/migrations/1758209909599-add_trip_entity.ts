import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTripEntity1758209909599 implements MigrationInterface {
    name = 'AddTripEntity1758209909599'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "trip" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying(300) NOT NULL, "startDate" character varying(300) NOT NULL, "endDate" character varying(300) NOT NULL, CONSTRAINT "PK_714c23d558208081dbccb9d9268" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "trip"`);
    }

}
