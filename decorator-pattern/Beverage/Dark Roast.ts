import { Beverage } from "./Beverage";

export class DarkRoast extends Beverage {

    description = "Dark Roast";

    cost() {
        return .99;
    }
}