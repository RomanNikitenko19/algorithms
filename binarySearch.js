//Binary search
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);

    if (array[middle] === item) {
      found = true;
      position = middle;
      return ` element index ${position}`;
    }
    if (item < array[middle]) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return ` element index ${position}`;
}

function recursionBinarySearch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  count += 1;

  if (item === middle) return ` element index ${middle}`;

  if (item < array[middle]) {
    return recursionBinarySearch(array, item, start = 0, end = middle - 1);
  } else {
    return recursionBinarySearch(array, item, start = middle + 1, end);
  }
}

console.log("Binary Search");
console.log(binarySearch(array, 4));
console.log("count =", count);
console.log("______________");

console.log("recursion Binary Search");
console.log(recursionBinarySearch(array, 4, 0, array.length));
console.log("count =", count);
console.log("______________");