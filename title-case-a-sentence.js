function titleCase(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let each in arr) {
    let word = "";
    for (let every in arr[each]) {
      if (every == 0) {
        
        word = arr[each].charAt([every]).toUpperCase();
      } 
      else {
      word = word + arr[each].charAt([every]).toLowerCase();
      }
    }
    newArr.push(word);
  }
  let newStr = newArr.join(" ");
  //console.log(newStr);
  return newStr;
}

titleCase("I'm a little tea pot");