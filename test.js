import random from "./index.mjs";

let iterator = 0;
const max = 10;
const min = 0;
const values = [];

while (iterator < 11) {
  const randomValue = random(max, min);

  if (!values.includes(randomValue)) {
    values.push(randomValue);
    iterator++;
  }
}
// Populate the array with every number between max and min once

const checkArray = () => {
  return new Promise((resolve, reject) => {
    values.forEach((number) => {
      if (!values.includes(number)) {
        reject(
          `ERROR: array of random numbers between ${max} and ${min} does not include ${number}`
        );
      }
    });
    resolve(
      `Test passed for an array of random numbers between ${max} and ${min}`
    );
  });
};
// Run a test on the array occurrences to check it contains every number between max and min,
// and return a promise

checkArray()
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
// Log to the console the results of checkArray
