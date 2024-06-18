// // TASK 1

// const arr = [90, 124, 55, 9213, 159, 225, 1543, 1545];
// const devideArr = [];

// for (num of arr) {
//   if (num % 3 === 0) {
//     devideArr.push(num);
//   }
// }

// console.log(devideArr);

// const divideArr = arr.filter((num) => num % 3 === 0);
// console.log(divideArr);

// // TASK 2

// const shoppingCart = [
//   {
//     name: "Cheese",
//     count: 4,
//     pricePerItem: 100,
//   },
//   {
//     name: "Water",
//     count: 5,
//     pricePerItem: 23,
//   },
//   {
//     name: "Banana",
//     count: 8,
//     pricePerItem: 55,
//   },
//   {
//     name: "Choccolate",
//     count: 2,
//     pricePerItem: 115,
//   },
// ];

// let total = 0;

// for (product of shoppingCart) {
//   total += Object.values(product)[1] * Object.values(product)[2];
// }

// console.log(total);

// // const total = shoppingCart.reduce(
// //   (total, product) => total + product.count * product.pricePerItem,
// //   0
// // );

// // console.log(total);

// // TASK 3

// const arr = [
//   [100, 1230, 1293123, 1236478, 9816],
//   [9932, 2123123, 1293123, 1203123, 1239],
//   [12391, 1235, 1123994, 1203123, 5543243],
//   [1203, 92346, 288, 12309, 5543243],
//   [94324, 8236, 123, 86231, 8455322],
//   [2340123, 172, 123, 321, 38421340],
// ];

// let sum = 0;

// for (innerArr of arr) {
//   for (item of innerArr) {
//     sum += item;
//   }
// }

// console.log(sum);

// // TASK 4

// const arr = [
//   "php",
//   "php",
//   "css",
//   "css",
//   "script",
//   "script",
//   "html",
//   "html",
//   "java",
//   "java",
//   "go",
//   "Python",
//   "Python",
// ];
// const uniqueArray = [];

// for (let i = 0; i < arr.length; i++) {
//   let isUnique = true;
//   for (let j = 0; j < uniqueArray.length; j++) {
//     if (arr[i] === uniqueArray[j]) {
//       isUnique = false;
//       break;
//     }
//   }
//   if (isUnique) {
//     uniqueArray.push(arr[i]);
//   }
// }

// console.log(uniqueArray);

// TASK 5

// const arr = [
//   "Jane",
//   "Bob",
//   "Bob",
//   "Luci",
//   "Jane",
//   "Bob",
//   "Peter",
//   "Felix",
//   "Felix",
//   "Bob",
//   "Andrew",
// ];
// const result = {};

// for (let i = 0; i < arr.length; i++) {
//   const item = arr[i];
//   if (result[item]) {
//     result[item]++;
//   } else {
//     result[item] = 1;
//   }
// }

// console.log(result);
