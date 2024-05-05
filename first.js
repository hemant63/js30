/*
Variable
let -> functional scope
var -> global scope
cont -> constant */
let isLoggedIn = 1;
// let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);
/*
Data-types
"33" => 33
"33abc" => NaN
true => 1; false => 0
"" => false
"Amit" => true
*/

let someNum = 33;
let stringNum = String(someNum);
// console.log(typeof stringNum);
// console.log(stringNum);

// ************* Operations *************
// console.log(2 * 3);
// console.log(2 ** 3);

let str1 = "hello";
let str2 = "Amit";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");
// console.log(+true);

// Primitive Data Type
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// JS is a dynamic type, not static type

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

//Reference type (Non Primitive)
// Arrays, Objects, Functions

//*****************Type of Memory***********
/* 

1- Stack (Used by Primitive) - we got a copy 
2- Heap (Used by Non Primitive) - we got reference 
*/
let myYoutubeName = "hiteshchaudharydotcom";
let anotherName = myYoutubeName;
anotherName = "chaiwithcode";

// console.log(myYoutubeName);
// console.log(anotherName);

let user1 = {
  email: "user@google.com",
  upi: "user@ybl",
};
let user2 = user1;
user2.email = "abc@google.com";

// console.log(user2.email);
// console.log(user1.email);

const name = "Amit";
const age = 20;
//string interpolation
//console.log(`Hello, My name is ${name}. I am ${age} years old.`);

const gameName = new String("AmitPal");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
const anotherString = gameName.slice(-3, 4);
// console.log(anotherString);

const url = "https:/instagram/profile/amitpal888";

//console.log(url.split("/"));

// *************** number and maths ************
const score = 400;
// console.log(score);
const balance = new Number(100.4346);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1323.87453;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000000;
console.log(hundreds.toLocaleString("en-IN"));
