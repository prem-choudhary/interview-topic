

const arr = [1, 2, 4, 6, 7, 9, 9, 10];

const min = Math.min(...arr);
const max = Math.max(...arr);

const missingElements = [];

for (let i = min; i <= max; i++) {
  let found = false;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === i) {
      found = true;
      break;
    }
  }
  if (!found) {
    missingElements.push(i);
  }
}

console.log(missingElements); 
//  this O/p is [3, 5, 8]



//  same code write in function 


function findMissingElements(arr1) {
    const min = Math.min(...arr1); 
    const max = Math.max(...arr1); 
  
    const missingElements = [];
  
    for (let i = min; i <= max; i++) {
      if (!arr1.includes(i)) {
        missingElements.push(i);
      }
    }
  
    return missingElements;
  }
  
  // Example usage
  const arr1 = [1, 2, 4, 6, 7, 9, 9, 10];
  const missing = findMissingElements(arr1);
  console.log(missing); 
//    the O/p is [3, 5, 8]
