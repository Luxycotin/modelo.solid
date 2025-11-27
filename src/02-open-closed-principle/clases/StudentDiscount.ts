import { IDiscount } from "../interfaces/IDiscount";

export class StudentDiscount implements IDiscount {

  private discount = 15;

  applyDiscount(): number {
    return this.discount;
  }
}