import { DarkRoast } from "./Beverage/Dark Roast";
import { Decaf } from "./Beverage/Decaf";
import { Espresso } from "./Beverage/Espresso";
import { HouseBlend } from "./Beverage/House Blend";
import { Mocha } from "./Condiment/Mocha";
import { Soy } from "./Condiment/Soy";
import { SteamedMilk } from "./Condiment/Steamed Milk";
import { Whip } from "./Condiment/Whip";

let beverage1 = new Espresso;
beverage1.setSize("Tall");
console.log(beverage1.getSize(), beverage1.getDescription(), ': '+beverage1.cost());

let beverage2 = new Decaf;
beverage2.setSize("Venti");
beverage2 = new Mocha(beverage2);
console.log(beverage2.getSize(), beverage2.getDescription(), ': '+beverage2.cost());

let beverage3 = new DarkRoast;
beverage3.setSize("Grande");
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Soy(beverage3);
console.log(beverage3.getSize(), beverage3.getDescription(), ': '+beverage3.cost());

let beverage4 = new HouseBlend;
beverage4.setSize("Venti");
beverage4 = new Whip(beverage4);
beverage4 = new SteamedMilk(beverage4);
console.log(beverage4.getSize(), beverage4.getDescription(), ': '+beverage4.cost());

let beverage5 = new Decaf;
beverage5.setSize("Tall");
beverage5 = new Mocha(beverage5);
beverage5 = new Soy(beverage5);
beverage5 = new Whip(beverage5);
console.log(beverage5.getSize(), beverage5.getDescription(), ': '+beverage5.cost());