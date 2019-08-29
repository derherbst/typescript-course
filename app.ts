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

