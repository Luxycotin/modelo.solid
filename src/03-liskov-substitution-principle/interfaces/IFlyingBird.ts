import { IBird } from "./IBird";

export interface IFlyingBird extends IBird {
  fly(): void;
}