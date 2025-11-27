import { IPrinter } from "../interfaces/IPrinter";

export class SimplePrinter implements IPrinter {
  print(): void {
    console.log("Imprimiendo");
  }
}