import { Beverage } from "../Beverage/Beverage";

export abstract class CondimentDecorator extends Beverage {
    abstract getDescription(): string;
}