import { Report } from "./Clases/Report";
import { ReportPrinter } from "./Clases/ReportPrinter";
import { ReportSaver } from "./Clases/ReportSaver";

export function singleResponsibility(): void {
    console.log('\n🔷🔷🔷 EJERCICIO 1: SINGLE RESPONSIBILITY PRINCIPLE 🔷🔷🔷');
    console.log('=========================================================\n');
    
    const report: Report = new Report('Reporte de ventas', 'Contenido del reporte de ventas...');
    const printer: ReportPrinter = new ReportPrinter();
    const saver: ReportSaver = new ReportSaver();
    
    console.log('📊 DEMOSTRACIÓN - IMPRESIÓN:');
    printer.printReport(report);
    console.log('');
    
    console.log('💾 DEMOSTRACIÓN - GUARDADO:');
    saver.saveToFile(report);
    console.log('');
    
    console.log('✅ SRP APLICADO: Cada clase tiene una sola responsabilidad');
    console.log('\n🏁 EJERCICIO SRP COMPLETADO');
    console.log('=========================================================\n');
}

// Auto-ejecutar la función cuando se importe el módulo
singleResponsibility();