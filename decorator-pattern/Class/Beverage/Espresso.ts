import { Beverage } from "./Beverage";

export class Espresso extends Beverage {

    description = "Espresso";

    cost() {
        return 1.99;
    }
}