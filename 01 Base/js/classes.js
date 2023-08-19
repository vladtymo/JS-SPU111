// -=-=-=-=-=-=-=- Classes -=-=-=-=-=-=-=-
class Car {
    // static fields
    static count = 0;

    // private fields
    #speed;

    constructor(model, year, color) {
        // create properties
        this.model = model;
        this.color = color;
        this.year = year;
        this.#speed = 0;

        // static member access
        Car.count++;
    }

    // methods
    print() {
        console.log(`Car: ${this.model} ${this.color} : ${this.year}... drdrdr ${this.#speed}km/h`);
    }
    paint(newColor) {
        if (newColor.length > 0)
            this.color = newColor;
    }
    render() {
        document.write(`<strong style='color: darkcyan;'>Car: ${this.model}, color: ${this.color}, year: ${this.year}</strong>`);
    }

    // static methods
    static getCount() { return Car.count; }

    // getter / setter
    set speed(value) {
        if (value >= 0)
            this.#speed = value;
    }
    get miles() {
        return this.#speed * 0.621371;
    }
}

const myCar = new Car("Nissan", 2014, "Black");

//myCar.#speed = -10; // error with private 

myCar.print();
myCar.paint("Red");

//myCar.setSpeed(135);
myCar.speed = 135;      // setter
myCar.speed = -50;      // ignore

myCar.render();
myCar.print();
console.log("Speed: " + myCar.miles.toFixed(1) + "mi/h");

console.log("Car count:", Car.getCount());
new Car(); new Car();
console.log("Car count:", Car.getCount());

// -=-=-=-=-=-=-=- Extends -=-=-=-=-=-=-=-
class PoliceCar extends Car {
    // super - reference to the parent class

    constructor(model, year, color, volume) {
        super(model, year, color); // base class constructor
        this.volume = volume;
    }

    beep() {
        console.log("Stop!!! Beep...beep...beep... volume: " + this.volume);
    }
    print() {
        super.print(); // base class method
        console.log("Volume: " + this.volume + "!");
    }
}

const prius = new PoliceCar("Toyota Prius", 2018, "White", 10000);

prius.print();
prius.beep();
