function bouncer(arr) {
  let falsies = [false, null, 0, "", '', undefined, NaN];
  let arr2 = [];
  
  for (let each in arr) {
    if (!(!!arr[each] == false)) {
      arr2.push(arr[each]);
    }
  }
  return arr2;
}

bouncer([7, "ate", "", false, 9]);