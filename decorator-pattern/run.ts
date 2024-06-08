import { Espresso } from "./Class/Beverage/Espresso";
import { Mocha } from "./Class/Condiment/Mocha";

let beverage1 = new Espresso;
console.log(beverage1.getDescription(), beverage1.cost());

let beverage2 = new Espresso;
beverage2 = new Mocha(beverage2);
console.log(beverage2.getDescription(), beverage2.cost());