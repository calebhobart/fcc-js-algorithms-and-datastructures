function mutation(arr) {
  
  let found = false;
  for (let each in arr[1]) {
    if (arr[0].search(arr[1][each].toUpperCase()) >= 0) {
      found = true;
    }
    else if (arr[0].search(arr[1][each].toLowerCase()) >= 0) {
      found = true;
    }
    else {
      return false;
    }
  }
  return found;
}

mutation(["hello", "hey"]);