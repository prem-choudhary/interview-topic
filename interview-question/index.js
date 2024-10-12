const array = ["Prem", "Rohit", "javascroipt"];
const newarray = array.push("React js");
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log(newarray);
console.log(array);

const arr = [1, 2, 3, 4, 5, 6, 78, 8, 9, 10];
const arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const newarr = [...arr, ...arr1];
console.log(newarr);
