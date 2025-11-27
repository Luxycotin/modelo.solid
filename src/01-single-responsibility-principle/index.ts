import { Report } from "./clases/Report";
import { ReportPrinter } from "./clases/ReportPrinter";
import { ReportSaver } from "./clases/ReportSaver";

export const SRP = () => {
  console.log("Principio SRP");

  const report = new Report("Monitoreo de cámaras", "Contenido del reporte");

  const reportPrinter = new ReportPrinter();
  const reportSaver = new ReportSaver();

  report.showContent();
  reportPrinter.printReport(report);
  reportSaver.saveToFile();

  console.log("-------------");
};
