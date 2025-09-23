import { IReport } from "../interfaces/IReport";

export class ReportPrinter {
    printReport(report: IReport): void {
        console.log('Imprimiendo reporte...')
        console.log(`Title: ${report.title}`);
        console.log(`Content: ${report.content}`);
    }

}