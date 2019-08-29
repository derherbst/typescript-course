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