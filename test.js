const random = require('./app.js');

let iterator = 0;
const max = 10;
const min = 0;
const occurrences = [];

while (iterator < 11) {
  let randomValue = random(max, min);

  if (!occurrences.includes(randomValue)) {
    occurrences.push(randomValue);
    iterator++;
  }
}
// Populate the array with every number between max and min once


const checkArray = () => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < 11; i++) {
      if (!occurrences.includes(i)) {
        reject(`ERROR: array of random numbers between ${max} and ${min} does not include ${i}`);
      }
    }
    resolve(`Test passed for an array of random numbers between ${max} and ${min}`);
  });
}
// Run a test on the array occurrences to check it contains every number between max and min,
// and return a promise


checkArray()
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((error) => {
    console.log(error);
  });
  // Log to the console the results of checkArray
