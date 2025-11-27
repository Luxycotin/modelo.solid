import { App } from "./clases/App";
import { MySQLDataBase } from "./clases/MySQLDatabase";
import { PostgresSQLDatabase } from "./clases/PostgreSQLDatabase";

export const DIP = () => {
  console.log("Principio DIP");

  const MySql = new MySQLDataBase();

  const PostgreSql = new PostgresSQLDatabase();

  const app1 = new App(MySql);
  const app2 = new App(PostgreSql);

  app1.start();
  app2.start();
};
