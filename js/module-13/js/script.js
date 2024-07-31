class Car {
  constructor(model, mark, country, speed = 0) {
    this.model = model;
    this.mark = mark;
    this.country = country;
    this.speed = speed;
  }

  increaseSpeed(value) {
    this.speed += value;
    console.log(`${this.mark} ${this.model} accelerated to ${this.speed}`);
  }

  decreaseSpeed(value) {
    this.speed -= value;
    console.log(`${this.mark} ${this.model} slowed down to ${this.speed}`);
  }
}

class Truck extends Car {
  constructor(model, mark, country, speed = 0, weight) {
    super(model, mark, country, speed);
    this.weight = weight;
  }
  takeWeight() {
    console.log(`truck ${this.mark} ${this.model} weighs ${this.weight}`);
  }
}

class Bus extends Car {
  takePeople(people) {
    console.log(`bus ${this.mark} ${this.model} can take ${people} people`);
  }
}

class Transporter extends Car {
  takeCars(cars) {
    console.log(`transporter ${this.mark} ${this.model} can take ${cars} cars`);
  }
}

const car = new Car("zx56", "bmw", "Germany", 60);
console.log(car.increaseSpeed(80));

const bus = new Bus("sv65", "audi", "Germany");
console.log(bus.takePeople(100));

const truck = new Truck("zv250", "bmw", "Germany", 50, 10000);
console.log(truck.takeWeight());
