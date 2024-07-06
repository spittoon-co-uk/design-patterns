import { Beverage } from "./Beverage";

export class Decaf extends Beverage {

    description = "Decaf";

    cost() {
        return 1.05;
    }
}