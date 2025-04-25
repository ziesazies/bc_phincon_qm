"use strict";
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    displayInfo() {
        console.log(`Car Brand: ${this.brand}`);
        console.log(`Car Model: ${this.model}`);
        console.log(`Car Year: ${this.year}`);
    }
}
let myCar = new Car("Toyota", "Corolla", 2020);
myCar.displayInfo();
class GenericClass {
    constructor(value) {
        this.value = value;
    }
    displayValue() {
        console.log(`Value: ${this.value}`);
    }
}
let stringInstance = new GenericClass("Hello, Generics!");
stringInstance.displayValue();
let numberInstance = new GenericClass(42);
numberInstance.displayValue();
// example callback but on typescript
function processArray(arr, callback) {
    for (let item of arr) {
        callback(item);
    }
}
