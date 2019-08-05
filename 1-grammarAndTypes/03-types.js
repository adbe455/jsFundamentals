// Types

// Booleans

// Boolean can represent: true/false, yes/no, on/off

let i = true;

let j = false;

let on = true;
let off = false;

console.log(on, off);


//Null

//Null = empty value; not 0; not undefined;
let empty = null;
console.log(empty);


// Undefined

// Undefined = no value assigned

let undef = undefined;
console.log(undef);

let x;
console.log(x);


// Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = .2 + .1;
console.log(notQuite);

let numbersAreHard = (.2 * 10 + .1 * 10)/10;
console.log(numbersAreHard);

let a = Number('123')
console.log('123')


//Strings

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);
console.log(typeof first, typeof second);


// Objects

let car = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true,
}

console.log(car);
console.log(typeof car);


// Array

let list = ['item1', 'item2', 'item3']
//1   2        3

//1 name of the array
//2 array goes inside square brackets
//3 each item, regardless of type, is seperated by commas

let burritos = ['large', 4, true];

console.log(typeof burritos);


//Addition vs Concatenation
//When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
//when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator-
//-it smashes the values together without trying to synthesize the values


let firstName = 'Aaron';
let lastName = 'Davis';
let houseNumber = 13332;
let street = 'Hollow Oak Rd';
let city = 'Fort Wayne';
let state = 'Indiana';
let zipcode = 46845;

console.log(firstName + ' ' + lastName);
console.log(houseNumber + ' ' + street);
console.log(city + ', ' + state);
console.log(zipcode);

console.log(firstName, lastName, houseNumber, street, city, state, zipcode);

let myName = 'Davis'
console.log(myName.toUpperCase());

let home = 'My home is Indianapolis';
console.log(home.includes('Indianapolis'));

let sent = 'This sentence will be split into individual parts ';
let split = sent.split(' ');
console.log(split);