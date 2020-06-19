let max;
let min;

if (process.argv.length == 2) {
  max = 10;
  min = 0;
}

if (process.argv.length == 3) {
  max = parseInt(process.argv[2]);
  min = 0;
}

if (process.argv.length == 4) {
  max = parseInt(process.argv[2]);
  min = parseInt(process.argv[3]);
} else if (process.argv.length > 4) {
  console.log("ERROR: Please provide between 0 and 2 arguments");
}

const random = () => Math.floor(Math.random() * (max - min + 1) + min);

export default random;
