function chunkArrayInGroups(arr, size) {
  let arrOfArr = [];

  for (let i = 0; i <= arr.length; i++) {
    let tempArr = arr.splice(0,size);

    arrOfArr.push(tempArr);

    if (arr.length > 0 && arr.length < 2) {
      arrOfArr.push(arr);
    }
  }

  return arrOfArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);