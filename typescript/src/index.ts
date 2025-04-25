class Car {
  public brand: string;
  public model: string;
  public year: number;

  constructor(brand: string, model: string, year: number) {
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

// make a simple example using generics with interface
interface GenericInterface<T> {
  value: T;
}

class GenericClass<T> implements GenericInterface<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  displayValue() {
    console.log(`Value: ${this.value}`);
  }
}

let stringInstance = new GenericClass<string>("Hello, Generics!");
stringInstance.displayValue();
let numberInstance = new GenericClass<number>(42);
numberInstance.displayValue();

// example callback but on typescript
function processArray<T>(arr: T[], callback: (item: T) => void): void {
  for (let item of arr) {
    callback(item);
  }
}
