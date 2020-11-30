import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class AlterEstabelecimentoProvider1606752542768
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "estabelecimento",
      new TableColumn({ name: "user_id", type: "uuid", isNullable: true })
    );

    await queryRunner.createForeignKey(
      "estabelecimento",
      new TableForeignKey({
        name: "EstabProvider",
        columnNames: ["user_id"],
        referencedColumnNames: ["id"],
        referencedTableName: "users",
        onDelete: "SET NULL",
        onUpdate: "CASCADE",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey("users", "EstabProvider");

    await queryRunner.dropColumn("estabelecimento", "user_id");
  }
}
