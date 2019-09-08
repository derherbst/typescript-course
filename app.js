var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./math/circle"], function (require, exports, circle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import calculateRectangle from './math/rectangle';
    console.log(circle_1.PI);
    console.log(circle_1.calcCircum(30));
    // console.log(calculateRectangle(200, 400));
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
    // function types
    var myMultiply;
    // myMultiply = sayHello;
    // myMultiply();
    myMultiply = multiply;
    console.log(myMultiply(5, 2));
    // objects
    var complex = {
        data: [100, 3.99, 10],
        output: function (all) {
            return this.data;
        }
    };
    var complex2 = {
        data: [100, 3.99, 10],
        output: function (all) {
            return this.data;
        }
    };
    // complex = {};
    // union types
    var myRealRealAge = 26; // либо число либо строка
    myRealRealAge = '26';
    // myRealRealAge = true;
    // check types
    var finalValue = 26;
    if (typeof finalValue == 'number') {
        console.log(666);
    }
    // never
    function neverReturns() {
        console.log(123123);
        throw new Error('An error!');
    }
    // Nullable types
    var canBeNull = 12;
    canBeNull = null;
    var alsoCanBeNull;
    alsoCanBeNull = null;
    var thisAnotherNull = null; // ????
    thisAnotherNull = 12;
    // exercise 1!
    var bankAccount = {
        money: 2000,
        deposit: function (value) {
            this.money += value;
        }
    };
    var myself = {
        name: "Max",
        bankAccount: bankAccount,
        hobbies: ["Sports", "Cooking"]
    };
    myself.bankAccount.deposit(3000);
    console.log(myself);
    var Person = /** @class */ (function () {
        function Person(name, username) {
            this.username = username;
            this.age = 26;
            this.name = name;
        }
        Person.prototype.printAge = function () {
            console.log(this.age);
        };
        Person.prototype.setType = function (type) {
            this.type = type;
            console.log(this.type);
        };
        return Person;
    }());
    var person = new Person('Georg', 'derherbst');
    console.log(person);
    console.log(person.name, person.username, person.type);
    person.printAge();
    // person.setType('Horny'); // private method
    // inheritance
    var Georg = /** @class */ (function (_super) {
        __extends(Georg, _super);
        // name = 'Georg';
        function Georg(username) {
            var _this = _super.call(this, 'Georg', username) || this;
            _this.age = 31;
            return _this;
        }
        return Georg;
    }(Person));
    var georg = new Georg('max');
    console.log(georg);
    // getters and setters
    var Plant = /** @class */ (function () {
        function Plant() {
            this._species = 'Default';
        }
        Object.defineProperty(Plant.prototype, "species", {
            get: function () {
                return this._species;
            },
            set: function (value) {
                if (value.length > 3) {
                    this._species = value;
                }
                else {
                    this._species = 'Default';
                }
            },
            enumerable: true,
            configurable: true
        });
        return Plant;
    }());
    var plant = new Plant();
    console.log(plant);
    console.log(plant.species);
    plant.species = 'AB';
    console.log(plant.species);
    plant.species = 'Green Plant';
    console.log(plant.species);
    // static properties and methods
    var Helpers = /** @class */ (function () {
        function Helpers() {
        }
        Helpers.calcCircumference = function (diameter) {
            return this.PI * diameter;
        };
        Helpers.PI = 3.14;
        return Helpers;
    }());
    console.log(2 * Helpers.PI);
    console.log(Helpers.calcCircumference(8));
    // abstract class
    var Project = /** @class */ (function () {
        function Project() {
            this.projectName = 'Default';
        }
        Project.prototype.calcBudget = function () {
            return this.budget * 2;
        };
        return Project;
    }());
    var ITProject = /** @class */ (function (_super) {
        __extends(ITProject, _super);
        function ITProject() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ITProject.prototype.changeName = function (name) {
            this.projectName = name;
        };
        return ITProject;
    }(Project));
    var newProject = new ITProject();
    console.log(newProject);
    newProject.changeName('Super It Project');
    console.log(newProject);
    // private constructors
    var OnlyOne = /** @class */ (function () {
        function OnlyOne(name) {
            this.name = name;
        }
        OnlyOne.getInstance = function () {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('The Only One');
            }
            return OnlyOne.instance;
        };
        return OnlyOne;
    }());
    var wrong = new OnlyOne('The only one');
    var right = OnlyOne.getInstance();
    console.log(right.name);
    right.name = 'Smth';
});
// namespaces and modules
// /// <reference path="circleMath.ts"/>
// /// <reference path="rectangleMath.ts"/>
// console.log(MyMath.calcCircum(10));
// console.log(MyMath.calcRectangle(10, 20));
