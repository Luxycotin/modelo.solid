# Ejercicios Prácticos - Principios SOLID

Proyecto desarrollado para la materia **Taller de Lenguaje de Programación 4**, con ejercicios prácticos sobre los cinco principios SOLID en TypeScript. El objetivo es mostrar cómo refactorizar código que originalmente violaba estos principios.

## Descripción

Cada carpeta del repositorio contiene un ejercicio que ejemplifica un principio SOLID distinto:

- **SRP** (Single Responsibility Principle) – Principio de Responsabilidad Única
- **OCP** (Open/Closed Principle) – Principio Abierto/Cerrado
- **LSP** (Liskov Substitution Principle) – Principio de Sustitución de Liskov
- **ISP** (Interface Segregation Principle) – Principio de Segregación de Interfaces
- **DIP** (Dependency Inversion Principle) – Principio de Inversión de Dependencias

## Requisitos Previos

- **Node.js** 16 o superior
- **npm**
- **Git**

Puedes verificar tus versiones con:

```bash
node --version
npm --version
git --version
```

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Luxycotin/modelo.solid.git
```

2. Entrar al directorio:

```bash
cd modelo.solid
```

3. Instalar dependencias:

```bash
npm install
```

Se instalarán **TypeScript** y **tsx** para compilar y ejecutar el código TypeScript.

## Estructura del Proyecto

```
src/
|-- app.ts
|-- 01-single-responsibility-principle/
|   |-- index.ts
|   |-- clases/
|   |   |-- Report.ts
|   |   |-- ReportPrinter.ts
|   |   `-- ReportSaver.ts
|   `-- interfaces/
|       `-- IReport.ts
|-- 02-open-closed-principle/
|   |-- index.ts
|   |-- clases/
|   |   |-- DiscountContext.ts
|   |   |-- RegularDiscount.ts
|   |   |-- StudentDiscount.ts
|   |   `-- VipDiscount.ts
|   `-- interfaces/
|       `-- IDiscount.ts
|-- 03-liskov-substitution-principle/
|   |-- index.ts
|   |-- clases/
|   |   |-- Penguin.ts
|   |   `-- Sparrow.ts
|   `-- interfaces/
|       |-- IBird.ts
|       `-- IFlyingBird.ts
|-- 04-interface-segregation-principle/
|   |-- index.ts
|   |-- clases/
|   |   |-- MultiFunctionPrinter.ts
|   |   `-- SimplePrinter.ts
|   `-- interfaces/
|       |-- IFax.ts
|       |-- IPrinter.ts
|       `-- IScanner.ts
`-- 05-dependency-inversion-principle/
    |-- index.ts
    |-- clases/
    |   |-- App.ts
    |   |-- MySQLDatabase.ts
    |   `-- PostgreSQLDatabase.ts
    `-- interfaces/
        `-- IDatabase.ts
```

## Uso del Proyecto

- Ejecutar todas las demos de SOLID:

```bash
npm start
```

- Modo desarrollo con recarga:

```bash
npm run dev
```

- Demos individuales:

```bash
npm run demo:srp
npm run demo:ocp
npm run demo:lsp
npm run demo:isp
npm run demo:dip
```

## Descripción de los Ejercicios

- **SRP**: `Report` solo maneja contenido; `ReportPrinter` imprime y `ReportSaver` guarda, separando responsabilidades.
- **OCP**: `IDiscount` define el contrato y `RegularDiscount`, `StudentDiscount`, `VipDiscount` agregan nuevos descuentos sin modificar código existente; `DiscountContext` aplica la estrategia.
- **LSP**: `IBird` define movimiento general y `IFlyingBird` agrega vuelo; `Penguin` no implementa vuelo y `Sparrow` sí, cumpliendo el contrato adecuado.
- **ISP**: Interfaces pequeñas (`IPrinter`, `IScanner`, `IFax`) evitan métodos innecesarios; `SimplePrinter` implementa solo impresión y `MultiFunctionPrinter` el resto.
- **DIP**: `App` depende de la abstracción `IDatabase`, permitiendo cambiar entre `MySQLDatabase` y `PostgreSQLDatabase` sin modificar la aplicación.

## Tecnologías Utilizadas

- **TypeScript**
- **tsx**
- **Node.js**

## Configuración de TypeScript

`tsconfig.json` usa:

- Target: ES2020
- Module: CommonJS
- Strict mode habilitado
- RootDir: `src/`
- OutDir: `dist/`

## Autor e Instituto

- **Autor:** Luxycotin / Luca Espinoza
- **Instituto:** Proyecto académico para mi instituto en TLP4
