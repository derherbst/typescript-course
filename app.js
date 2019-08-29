"use strict";
console.log(123);
var myName = 'Georg';
// myName = 123;
var myAge;
myAge = 123;
// myAge = 'tttt';
var hobbies = ['reading', 'sports'];
hobbies = [123];
// hobbies = 123
// tupels 
var address = ['Kievskaya', 22];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
console.log(Color);
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Hello!');
}
// function arguments
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'G'));
console.log(multiply(2, 10));
