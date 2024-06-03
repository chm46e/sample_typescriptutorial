"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
let names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let scores;
scores = ['Programming', 5, 'Software Design', 4];
// the number? means that the last element is optional
let color = [255, 0, 0, 0.5];
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["Mar"] = 2] = "Mar";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sep"] = 8] = "Sep";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
;
function isItSummer(month) {
    let isSummer;
    switch (month) {
        case Month.Jun:
        case Month.Jul:
        case Month.Aug:
            isSummer = true;
            break;
        default:
            isSummer = false;
            break;
    }
    return isSummer;
}
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["Draft"] = 0] = "Draft";
    ApprovalStatus[ApprovalStatus["Pending"] = 1] = "Pending";
    ApprovalStatus[ApprovalStatus["Approved"] = 2] = "Approved";
})(ApprovalStatus || (ApprovalStatus = {}));
;
const request = {
    id: 1,
    status: ApprovalStatus.Pending,
    description: 'Please approve this request'
};
if (request.status === ApprovalStatus.Pending) {
    console.log('This request is pending');
}
console.log(isItSummer(Month.Jun)); // true
// any type is basically a get out of jail free card
// it can be used to bypass the type checking, default type when no type is specified
let json_result;
function log(message) {
    console.log(message);
}
// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
function throwError(message) {
    throw new Error(message);
}
// union types - a type formed from two or more other types, representing values that may be any one of those types
// named function
function addifier(a = 4, b = 5) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}
// anonymous function
let subtract;
subtract = function (x, y) {
    if (typeof y === 'undefined') {
        return x;
    }
    return x - y;
};
// rest parameters aka c++ variadic functions
function getTotal(...numbers) {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
function add(a, b) {
    return a + b;
}
let input;
input = 100; // valid
input = 'Hi'; // valid
let click;
click = 'click'; // valid
let x = 0;
if (1 === 1) {
    x = 100;
}
else if (2 === 2) {
    1 < 2 ? x++ : x = 1;
}
else {
    x = 0;
}
// aka let person: object;
let person;
person = {
    name: names[0],
    age: 25
};
console.log(person);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let counter = 0;
while (counter < 5) {
    console.log(counter);
    counter++;
}
let greeting;
greeting = function (name) {
    return `Hi ${name}`;
};
//let heading = document.createElement('p');
//heading.textContent = greeting(person.name);
//document.body.appendChild(heading);
//document.addEventListener('click', function (event) {
//    console.log(event.button); //
//});
// An abstract method does not contain implementation. It only defines the signature of the method without including the method body. An abstract method must be implemented in the derived class.
// similar to interface, but abstract class more like shares common methods and properties between classes rather than defining a structure
class EmployeeIdendity {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement() {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}
class Contractor extends EmployeeIdendity {
    constructor(firstName, lastName, rate, hours) {
        super(firstName, lastName);
        this.rate = rate;
        this.hours = hours;
    }
    getSalary() {
        return this.rate * this.hours;
    }
}
class Person {
    get ssn() {
        return this._ssn;
    }
    set ssn(value) {
        if (value.length !== 9) {
            throw new Error('SSN must be 9 digits long');
        }
        this._ssn = value;
    }
    constructor(ssn, firstName, lastName, birthDate) {
        this._ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
        this.birthDate = birthDate;
    }
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}
class Alien {
    static getHeadcount() {
        return Alien.headcount;
    }
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    describe() {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}
// static - a property or method that belongs to the class itself, not the object aka shared among all instances
Alien.headcount = 0;
class Employee extends Alien {
    constructor(firstName, lastName, jobTitle) {
        // call the constructor of the Alien class:
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }
    // override the describe method for child class, but still use the parent's class method
    describe() {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
let person1 = new Person('123-45-6789', 'John', 'Doe', new Date('1990-01-01'));
// person1.ssn uses the getter function, but notice you don't have to call it like a function
console.log(`${person1.getFullName()}'s SSN is ${person1.ssn}`);
let employee = new Employee('John', 'Doe', 'Front-end Developer');
console.log(employee.describe());
class Asdf {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    toJSON() {
        return JSON.stringify(this.firstName + ' ' + this.lastName);
    }
}
let asdf = new Asdf('John', 'Doe');
console.log(asdf.toJSON());
// NGL this is a confusing, look at extend interface
// An interface also can extend a class. If the class contains private or protected members, the interface can only be implemented by the class or subclasses of that class.
class Control {
    constructor() {
        this.state = true;
    }
}
class Button extends Control {
    enable() { }
}
class TextBox extends Control {
    enable() { }
}
class Label extends Control {
}
let c = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};
class Customer {
    isCreditAllowed() {
        // ...
        return true;
    }
}
class Supplier {
    isInShortList() {
        // ...
        return true;
    }
}
function signContract(partner) {
    let message = '';
    if (partner instanceof Customer && 'isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }
    return message;
}
function isCustomer(partner) {
    return partner instanceof Customer;
}
// casting: <Customer>partner or partner as Customer
//generics, better than any type, cus type safety then
function getRandomElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
console.log(getRandomElement(names)); // can be also like getRandomElement<string>(names)
// constraints on what the generics can be
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let result = merge({ name: 'John' }, { jobTitle: 'Frontend Developer' });
console.log(result);
function prop(obj, key) {
    return obj[key];
}
class Stack {
    constructor(size) {
        this.size = size;
        this.elements = [];
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    isFull() {
        return this.elements.length === this.size;
    }
    push(element) {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);
    }
    pop() {
        let element = this.elements.pop();
        if (element) {
            return element;
        }
        else {
            throw new Error('The stack is empty!');
        }
    }
}
let numbers = new Stack(5);
let month = {
    key: 'Jan',
    value: 1
};
class List {
    constructor() {
        this.items = [];
    }
    add(o) {
        this.items.push(o);
    }
    remove(o) {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}
let inputOptions = {
    'disabled': false,
    'visible': true
};
// YEAH i know the modules and imports thing does not work right now.
const EmailValidator_1 = __importDefault(require("./EmailValidator"));
let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator_1.default();
let emailvalidator_result = validator.isValid(email);
console.log(emailvalidator_result);
// import * from 'module_name';
// each module can have a default export
// import default_export from 'module_name';
const ZipCodeValidator_1 = __importDefault(require("./ZipCodeValidator"));
let zipvalidator = new ZipCodeValidator_1.default();
let zipresult = zipvalidator.isValid('95134');
console.log(zipresult);
