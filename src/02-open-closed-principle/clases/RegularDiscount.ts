import { IDiscount } from "../interfaces/IDiscount";

export class RegularDiscount implements IDiscount {

  private discount = 10;

  applyDiscount(): number {
    return this.discount;
  }
}