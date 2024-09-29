// function addNumbers(a,b){
//     return a+b;
// }

// console.log(addNumbers(5,10));

// let calculateAreaOfRectangle = (width,height) => {
//     return width*height;
// }

// let area = calculateAreaOfRectangle(5,70);
// console.log("Area of Rectangle is : " +area)

// let str = "Hello World";

// function reversString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reversString(str));

// function checkEevnOrOdd(num){
//     if(num % 2 === 0){
//         console.log("even")
//     }
//    else{
//    console.log("odd")
//    }
// }

// const checked = checkEevnOrOdd(121)
// console.log(checked)

//  check is leap Year

// let leapYear = (year) => {
//   if((year % 4 === 0 && year % 100 == !0) || year % 400 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const CheckYear = leapYear(2024);
// console.log(CheckYear);
//  arr of sum

// let arr = [20, 30, 40, 10, 8];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// console.log(sum);

// let car = {
//     make : Toyota,
//     model : camry,
//     year : 2022
// }

// car.startEngine = function(){
//     console.log("Engine")
// }
// car.startEngine()
// let car = {
//     make:"Toyota",
//     model:"Camry",
//     year:2022
// }

// car.startEngine = function(){
//     console.log("Engine Started")
// }

// car.startEngine();

// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   } else {
//     let fact = 1;
//     for (let i = 1; i < num; i++) {
//       fact *= i; // fact = fact * i
//     }
//     return fact;
//   }
// }
// console.log(factorial(5));

// function getRandomNumber(min,max){
//     return Math.floor(Math.random()*(max-min +1)) +min;
// }

// console.log(getRandomNumber(1,5))

// let arr = [10,15,20,25,30,35,40];

// function filterEvenNumber(arr){
//     return arr.filter(num => num %2 ===0);
// }

// console.log(filterEvenNumber(arr));
// // console.log(arr)

// let arr1 = [10, 15, 20, 25, 30, 35, 40];

// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] % 2 === 0) {
//     console.log(arr1[i]);
  
//   }
// //   console.log(arr);
// }


// function doubleArrayElements(arr){
//     return arr.map( num=>  num *2 ) }
    
//     let arr = [10,20,30,40,50]
//     console.log(doubleArrayElements(arr))
//     console.log(arr);


// function findLargestElement(arr){
//     return arr.reduce((max,current)=>
//         current > max ? current :max)
//     }
//     let arr= [1,2,10,20,10,5,16];
//     let reduce = findLargestElement(arr);
    
//     console.log(reduce)

function removeElementFromArray(arr,target){
    return arr.filter(item => item !== target);
}

let arr = [10,10,20,10,30,10,40,10]
let target = 10;

let removed =removeElementFromArray(arr,target);

console.log(removed)