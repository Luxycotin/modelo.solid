import { IDatabase } from "../interfaces/IDatabase";

export class MySQLDataBase implements IDatabase {
  connect(): void {
    console.log("Conectado a MYSQL");
  }
}