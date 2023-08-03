const fruits = ["Strawberry", "Banana", "Mango"];

const copyFruits = fruits.slice();
console.log(copyFruits);

const copyFruits2 = [...fruits];
console.log(copyFruits2);

const copyFruits3 = Array.from(fruits);
console.log(copyFruits3);
