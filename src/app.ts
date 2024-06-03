let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];
let scores : (string | number)[];
scores = ['Programming', 5, 'Software Design', 4];

// the number? means that the last element is optional
let color: [number, number, number, number?] = [255, 0, 0, 0.5];

enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
};

function isItSummer(month: Month) {
    let isSummer: boolean;
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

enum ApprovalStatus {
    Draft = 0,
    Pending = 1,
    Approved = 2
};


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
let json_result : any;

function log(message: string): void {
    console.log(message);
}

// The never type represents the return type of a function that always throws an error or a function that contains an indefinite loop.
function throwError(message: string): never {
    throw new Error(message);
}

// union types - a type formed from two or more other types, representing values that may be any one of those types
// named function
function addifier(a: number | string = 4, b: number | string = 5) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

// anonymous function
let subtract: (x: number, y?: number) => number;
subtract = function (x: number, y?: number) {
    if (typeof y === 'undefined') {
        return x;
    }
    return x - y;
};

// rest parameters aka c++ variadic functions
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

// function overloading - a way to define multiple function signatures with the same name
// remember from c++!
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

// type aliases - a way to create a new name for a type
type alphanumerics = string | number;
let input: alphanumerics;
input = 100; // valid
input = 'Hi'; // valid

let click: 'click' | 'dblclick';
click = 'click'; // valid

let x: number = 0;
if (1 === 1) {
    x = 100;
} else if (2 === 2) {
    1 < 2 ? x++ : x = 1;
} else {
    x = 0;
}


// aka let person: object;
let person: {
    name: string;
    age: number
};

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

let greeting : (name: string) => string;
greeting = function (name: string) {
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
abstract class EmployeeIdendity {
    constructor(private firstName: string, private lastName: string) {
    }
    abstract getSalary(): number
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

class Contractor extends EmployeeIdendity {
    constructor(firstName: string, lastName: string, private rate: number, private hours: number) {
        super(firstName, lastName);
    }
    getSalary(): number {
        return this.rate * this.hours;
    }
}

class Person {
    private _ssn: string;
    private _firstName: string;
    private _lastName: string;

    // use readonly for class properties only. const is for variables
    readonly birthDate: Date;

    public get ssn(): string {
        return this._ssn;
    }

    public set ssn(value: string) {
        if (value.length !== 9) {
            throw new Error('SSN must be 9 digits long');
        }
        this._ssn = value;
    }

    constructor(ssn: string, firstName: string, lastName: string, birthDate: Date) {
        this._ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
        this.birthDate = birthDate;
    }

    public getFullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
}

class Alien {
    // static - a property or method that belongs to the class itself, not the object aka shared among all instances
    private static headcount: number = 0;

    static getHeadcount(): number {
        return Alien.headcount;
    }

    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Alien {

    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        // call the constructor of the Alien class:
        super(firstName, lastName);
    }

    // override the describe method for child class, but still use the parent's class method
    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
}
let person1 = new Person('123-45-6789', 'John', 'Doe', new Date('1990-01-01'));

// person1.ssn uses the getter function, but notice you don't have to call it like a function
console.log(`${person1.getFullName()}'s SSN is ${person1.ssn}`);

let employee = new Employee('John','Doe','Front-end Developer');
console.log(employee.describe());

// interface - basically a c struct, but only contains method signatures and properties, but generally defines structure
interface Dolphin {
    readonly ssn: string;
    firstName: string;
    middleName?: string;
    lastName: string;
    (str: string, isUpper: boolean): string // function signature
}

interface JsonType {
    toJSON(): string
}
class Asdf implements JsonType {
    constructor(private firstName: string,
                private lastName: string) {
    }
    toJSON(): string {
        return JSON.stringify(this.firstName + ' ' + this.lastName);
    }
}

let asdf = new Asdf('John', 'Doe');
console.log(asdf.toJSON());


// NGL this is a confusing, look at extend interface
// An interface also can extend a class. If the class contains private or protected members, the interface can only be implemented by the class or subclasses of that class.
class Control {
    private state: boolean = true;
}

interface StatefulControl extends Control {
    enable(): void
}

class Button extends Control implements StatefulControl {
    enable() { }
}
class TextBox extends Control implements StatefulControl {
    enable() { }
}
class Label extends Control { }


// Error: cannot implement
//class Chart implements StatefulControl {
 //   enable() { }
//}

/*
Aspect	Interfaces	Abstract Classes
Purpose	Define contractual structure.	Provide common functionality and structure.
Implementation	Contains only method signatures.	Can contain implemented methods and abstract methods.
Multiple Inheritance	Supports multiple interface implementation.	Supports single class inheritance.
Implementation Flexibility	No implementation code in interfaces.	Mixes implemented and abstract methods.
Extensibility	Easily extendable by adding new properties/methods.	Can provide shared methods for derived classes.
Constructors	No constructors in interfaces.	Can have constructors for initialization.
Type Checking	Ensures objects adhere to the structure.	Provides a common type and functionality.
Instantiation	Interfaces can’t be instantiated.	Abstract classes can’t be instantiated directly.
Usage	Designing contracts and structure.	Sharing functionality among related classes.
 */

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Identity {
    id: number;
    name: string;
}

interface Contact {
    email: string;
    phone: string;
}

// An intersection type combines two or more types to create a new type that has all properties of the existing types.
type EmployeeType = Identity & Contact;
type CustomerType = BusinessPartner & Contact;
let c: CustomerType = {
    name: 'ABC Inc.',
    credit: 1000000,
    email: 'sales@abcinc.com',
    phone: '(408)-897-5735'
};

class Customer {
    isCreditAllowed(): boolean {
        // ...
        return true;
    }
}

class Supplier {
    isInShortList(): boolean {
        // ...
        return true;
    }
}

type BusinessPartnerType = Customer | Supplier;

function signContract(partner: BusinessPartnerType) : string {
    let message: string = '';
    if (partner instanceof Customer && 'isCreditAllowed' in partner) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }

    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }

    return message;
}

function isCustomer(partner: any): partner is Customer {
    return partner instanceof Customer;
}

// casting: <Customer>partner or partner as Customer


//generics, better than any type, cus type safety then
function getRandomElement<T>(items: T[]): T {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

console.log(getRandomElement(names)); // can be also like getRandomElement<string>(names)

// constraints on what the generics can be
function merge<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    };
}

let result = merge(
    { name: 'John' },
    { jobTitle: 'Frontend Developer' }
);

console.log(result);

function prop<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

class Stack<T> {
    private elements: T[] = [];

    constructor(private size: number) {
    }
    isEmpty(): boolean {
        return this.elements.length === 0;
    }
    isFull(): boolean {
        return this.elements.length === this.size;
    }
    push(element: T): void {
        if (this.elements.length === this.size) {
            throw new Error('The stack is overflow!');
        }
        this.elements.push(element);

    }
    pop(): T {
        let element: T | undefined = this.elements.pop();
        if (element) {
            return element;
        } else {
            throw new Error('The stack is empty!');
        }
    }
}
let numbers = new Stack<number>(5);

interface Pair<K, V> {
    key: K;
    value: V;
}
let month: Pair<string, number> = {
    key: 'Jan',
    value: 1
};

interface Collection<T> {
    add(o: T): void;
    remove(o: T): void;
}
class List<T> implements Collection<T>{
    private items: T[] = [];

    add(o: T): void {
        this.items.push(o);
    }
    remove(o: T): void {
        let index = this.items.indexOf(o);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    }
}

interface Options<T> {
    [name: string]: T
}

let inputOptions: Options<boolean> = {
    'disabled': false,
    'visible': true
};

// YEAH i know the modules and imports thing does not work right now.
import EmailValidator from './EmailValidator';

let email = 'john.doe@typescripttutorial.net';
let validator = new EmailValidator();
let emailvalidator_result = validator.isValid(email);

console.log(emailvalidator_result);

import type {alphanumeric} from './Types';

// import * from 'module_name';

// each module can have a default export
// import default_export from 'module_name';

import ZipCodeValidator from './ZipCodeValidator';

let zipvalidator = new ZipCodeValidator();
let zipresult = zipvalidator.isValid('95134');

console.log(zipresult);