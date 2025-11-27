import { Report } from "./Report";

export class ReportPrinter {

  printReport(report: Report): void {
    console.log(`Imprimiendo reporte: ${report.title}`);
  }
}