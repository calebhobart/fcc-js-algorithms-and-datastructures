function frankenSplice(arr1, arr2, n) {
  let arr2Copy = [];

  for (let each in arr2) {
    arr2Copy.push(arr2[each]);
  }
  let temp = arr2Copy.splice(n);
  return arr2Copy.concat(arr1).concat(temp);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);