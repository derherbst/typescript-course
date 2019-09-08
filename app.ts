import { PI, calcCircum } from './math/circle';
// import calculateRectangle from './math/rectangle';

console.log(PI);
console.log(calcCircum(30));
// console.log(calculateRectangle(200, 400));

console.log(123);
let myName = 'Georg';
// myName = 123;
let myAge: number;
myAge = 123;
// myAge = 'tttt';

let hobbies: any[] = ['reading', 'sports'];
hobbies = [123]
// hobbies = 123

// tupels 
let address: [string, number] = ['Kievskaya', 22];

// enum
enum Color {
    Red,
    Green = 100,
    Blue,
}

let myColor: Color = Color.Blue;
console.log(myColor);
console.log(Color);

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);

// functions

function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log('Hello!');
}

// function arguments
function multiply(value1: number, value2: number): number {
    return value1*value2;
}

// console.log(multiply(2, 'G'));
console.log(multiply(2, 10 ));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));

// objects

let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data
    }
};

// type alias

type Complex = {
    data: number[],
    output: (all: boolean) => number[]
}

let complex2: Complex = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data
    }
};

// complex = {};

// union types
let myRealRealAge: number | string = 26; // либо число либо строка
myRealRealAge = '26';
// myRealRealAge = true;

// check types

let finalValue = 26;
if (typeof finalValue == 'number') {
    console.log(666);
}

// never
function neverReturns(): never {
    console.log(123123);
    throw new Error('An error!')
}

// Nullable types
let canBeNull: number | null = 12;
canBeNull = null;
let alsoCanBeNull;
alsoCanBeNull = null;
let thisAnotherNull = null; // ????
thisAnotherNull = 12;

// exercise 1!

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

type BankAccount = {
    money: number,
    deposit: (value: number) => void
}

let myself: {
    name: string,
    bankAccount: BankAccount,
    hobbies: string[]
} =  {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(3000);

console.log(myself);

class Person {
    name: string;
    private type: string;
    protected age: number = 26;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
    }
    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new Person('Georg', 'derherbst');
console.log(person);
console.log(person.name, person.username, person.type);
person.printAge();
// person.setType('Horny'); // private method

// inheritance
class Georg extends Person {
    // name = 'Georg';

    constructor(username: string) {
        super('Georg', username);
        this.age = 31;
    }
}

const georg = new Georg('max');

console.log(georg);

// getters and setters
class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        } else {
            this._species = 'Default';
        }
    }
}

let plant = new Plant();
console.log(plant);
console.log(plant.species);
plant.species = 'AB';
console.log(plant.species);
plant.species = 'Green Plant';
console.log(plant.species);

// static properties and methods

class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// abstract class

abstract class Project {
    projectName: string = 'Default';
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super It Project');
console.log(newProject);

// private constructors
class OnlyOne {
    private static instance: OnlyOne;

    private constructor(public readonly name: string) {}

    static getInstance() {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

let wrong = new OnlyOne('The only one');
let right = OnlyOne.getInstance();
console.log(right.name);
right.name = 'Smth';

// namespaces and modules
// /// <reference path="circleMath.ts"/>
// /// <reference path="rectangleMath.ts"/>
// console.log(MyMath.calcCircum(10));
// console.log(MyMath.calcRectangle(10, 20));
