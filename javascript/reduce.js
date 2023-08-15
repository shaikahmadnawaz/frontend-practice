// In JavaScript, the reduce method is a built-in function available for arrays. It's used to "reduce" the elements of an array into a single value by repeatedly applying a provided function in a cumulative manner. The reduce method is useful for operations like summing up values, calculating averages, or any other operation that involves accumulating values.

const numbers = [1, 2, 3, 4, 5];

const initialValue = 0;
const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, initialValue);

console.log(sum); // Output: 15

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(priceToPay); // Output: 22596
