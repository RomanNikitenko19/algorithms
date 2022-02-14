//Linear search
const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];

let count = 0;

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i += 1) {
    count += 1;
    if (array[i] === item) {
      return ` element index ${i}`;
    }
  }
  return null;
}
console.log("Linear search");
console.log(linearSearch(array, 11));
console.log("count =", count);
console.log('______________');

