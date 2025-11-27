import { IDiscount } from "../interfaces/IDiscount";

export class VipDiscount implements IDiscount {

  private discount = 20;

  applyDiscount(): number {
    return this.discount;
  }
}