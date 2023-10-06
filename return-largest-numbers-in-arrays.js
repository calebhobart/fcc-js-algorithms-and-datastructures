function largestOfFour(arr) {
  let largest = [];

  for (const each in arr) {
    let biggest = 0;
    for (const every in arr[each]) {
      //console.log(every);
      if (every == 0) {
        biggest = arr[each][every];
      }
      console.log(biggest);
      if (arr[each][every] > biggest) {
        biggest = arr[each][every];
      }
    }
    largest.push(biggest);
  }

  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);