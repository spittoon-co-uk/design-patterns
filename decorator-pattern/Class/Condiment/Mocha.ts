import { Beverage } from "../Beverage/Beverage";
import { CondimentDecorator } from "../Decorator/CondimentDecorator";

export class Mocha extends CondimentDecorator {
    beverage: Beverage;
    description;


    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        return .20 + this.beverage.cost();
    }
}