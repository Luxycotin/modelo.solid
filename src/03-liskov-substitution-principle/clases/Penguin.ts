import { IBird } from "../interfaces/IBird";

export class Penguin implements IBird {
  move(): void {
    console.log("El pinguino se mueve");
  }
}