import { IDatabase } from "../interfaces/IDatabase";

export class App {
  private db: IDatabase;

  constructor(db: IDatabase) {
    this.db = db;
  }

  start() {
    this.db.connect();
  }
}