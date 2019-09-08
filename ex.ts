class Car {
    name: string;
    acceleration: number = 0;

    constructor(name: string) {
        this.name = name;
    }

    honk() {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed
    }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// const baseObject: {width: number, length: number} = {
//     width: 0,
//     length: 0
// };

class BaseObject {
    width: number = 0;
    length: number = 0;
}

const baseObject = new BaseObject();
console.log(baseObject);
class Rectangle extends BaseObject {
    // width = 5;
    // length = 2;
    //
    // constructor() {
    //     super();
    // }

    calcSize(): number {
        return this.width * this.length
    }
}
const rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 2;
console.log(rectangle.calcSize());

///////////////////////

class Person {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}

const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);