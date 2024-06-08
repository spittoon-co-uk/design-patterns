"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Espresso_1 = require("./Beverage/Espresso");
var Mocha_1 = require("./Condiment/Mocha");
var beverage1 = new Espresso_1.Espresso;
console.log(beverage1.getDescription(), beverage1.cost());
var beverage2 = new Espresso_1.Espresso;
beverage2 = new Mocha_1.Mocha(beverage2);
console.log(beverage2.getDescription(), beverage2.cost());
