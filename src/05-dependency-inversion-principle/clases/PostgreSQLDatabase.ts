import { IDatabase } from "../interfaces/IDatabase";

export class PostgresSQLDatabase implements IDatabase {
  connect(): void {
    console.log("Conectado a PostreSQL");
  }
}