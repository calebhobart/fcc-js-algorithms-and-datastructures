function findElement(arr, func) {
  for (const num in arr) {
    if (func(arr[num])) {
      return arr[num];
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);