import { IReport } from "../interfaces/IReport";

export class Report implements IReport {
  constructor(
    public title: string,
    public content: string
  ) { }
  showContent(): void {
    console.log(`Contenido del reporte: ${this.content}`);
  }
}