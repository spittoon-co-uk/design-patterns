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

    getSize(): string {
        return this.beverage.getSize();
    }

    getDescription(): string {
        return this.beverage.getDescription() + ", Mocha";
    }

    cost(): number {
        let cost = 0;
        switch (this.getSize()) {
            case "Tall":
                cost += .10;
                break;
            case "Grande":
                cost += .20;
                break;
            case "Venti":
                cost += .30;
                break;
        }
        return Math.round((cost + this.beverage.cost()) * 100) / 100;
    }
}