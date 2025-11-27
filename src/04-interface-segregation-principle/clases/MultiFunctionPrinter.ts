import { IFax } from "../interfaces/IFax";
import { IPrinter } from "../interfaces/IPrinter";
import { IScanner } from "../interfaces/IScanner";

export class MultiFunctionPrinter implements IFax, IPrinter, IScanner {
  scan(): void {
    console.log("Escaneando...")
  }

  print(): void {
    console.log("Imprimiendo...");
  }

  fax(): void {
    console.log("Faxeando");
  }
}