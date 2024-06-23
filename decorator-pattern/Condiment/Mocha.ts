import { Beverage } from "../Beverage/Beverage";
import { CondimentDecorator } from "../Decorator/CondimentDecorator";

export class Mocha extends CondimentDecorator {
    beverage: Beverage;
    description: string;


    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
        this.description = '';
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        return .20 + this.beverage.cost();
    }
}