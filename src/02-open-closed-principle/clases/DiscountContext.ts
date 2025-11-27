import { IDiscount } from "../interfaces/IDiscount";

export class DiscountContext {
  constructor(private discount: IDiscount) {}

  showDiscount() {
    console.log(`Descuento aplicado del ${this.discount.applyDiscount()}`);
  }
}