export abstract class Beverage {

    description = "Unknown beverage";
    size = "Unknown size";

    getDescription(): string {
        return this.description;
    }

    abstract cost(): number;

    setSize( size: "Tall"|"Grande"|"Venti") {
        this.size = size;
    }

    getSize(): string {
        return this.size;
    }
}