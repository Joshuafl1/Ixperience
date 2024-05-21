let name = "byron";
const lastName = "de Villiers";

let address = "5 Riepen Park, Johannesburg";

let age = 31;

let uniqueKey = Symbol("key");
let uniqueKey2 = Symbol("key");

console.log(age);

console.log(name);
console.log(lastName);

/**
 * Non primitive Data Types
 */
//objects

const person = {
  lastName: "de Villiers",
  address: "5 Ripen Park",
  age: 31,
};

console.log(person);

let arr1 = new Array(1, 2, 3, 4);
console.log(Array);

let fruits = ["apple", "orange", "pear", "mango"];
console.log(fruits);

fruits.push("strawberry");
console.log(fruits);

/**
 * Loops
 */
const arr3 = [1, 2, 3, 4];
for (let i = 0; i <= arr3.length; i++) {
  console.log(i);
}
//higher order array methods
const filterFunction = (fruit) => {
  return fruit !== "apple";
};
const filteredFruits = fruits.filter(filterFunction);
console.log("filteredFruits");
console.log(filteredFruits);

fruits.filter(() => {});

console.log("Operators:");
let remainder = 15 % 5;
console.log(remainder);

//conditional statements

