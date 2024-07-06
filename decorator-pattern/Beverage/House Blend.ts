import { Beverage } from "./Beverage";

export class HouseBlend extends Beverage {

    description = "House Blend Coffee";

    cost() {
        return .89;
    }
}