import { IFlyingBird } from "../interfaces/IFlyingBird";

export class Sparrow implements IFlyingBird {
  fly(): void {
    console.log("El gorrión está volando");
  }
  move(): void {
    console.log("El gorrión se mueve");
  }
}