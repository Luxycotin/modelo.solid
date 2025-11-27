import { DiscountContext } from "./clases/DiscountContext";
import { RegularDiscount } from "./clases/RegularDiscount";
import { StudentDiscount } from "./clases/StudentDiscount";
import { VipDiscount } from "./clases/VipDiscount";

export const OCP = () => {
  console.log("Principio OCP");

  const studentDiscount = new DiscountContext(new StudentDiscount());

  const regularDiscount = new DiscountContext(new RegularDiscount());

  const vipRegular = new DiscountContext(new VipDiscount());

  studentDiscount.showDiscount();
  regularDiscount.showDiscount();
  vipRegular.showDiscount();

  console.log("-------------");
};
