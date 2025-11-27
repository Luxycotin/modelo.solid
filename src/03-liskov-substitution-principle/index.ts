import { Penguin } from "./clases/Penguin";
import { Sparrow } from "./clases/Sparrow";

export const LSP = () => {
  console.log("Principio LSP");
  const penguin = new Penguin();
  const sparrow = new Sparrow();

  penguin.move();
  sparrow.fly();
  sparrow.move();

  console.log("-------------");
};
