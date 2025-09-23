import { IReport } from '../interfaces/IReport';

export class ReportSaver {
  saveToFile(report: IReport): void {
    console.log(`💾 Guardando reporte: ${report.title}`);
    console.log('✅ Reporte guardado exitosamente');
  }
}