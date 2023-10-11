function getIndexToIns(arr, num) {
  arr.sort(function(a, b){return a-b});

  let idx = 0;
  for (let each in arr) {
    if (num > arr[each]) {
      idx = parseInt(each)+1;
    }
  }
  return idx;
}

getIndexToIns([40, 60], 50);