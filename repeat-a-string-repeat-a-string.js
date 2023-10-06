function repeatStringNumTimes(str, num) {
  let repeat = str;
  
  if (num <= 0) {
    return "";
  }
  else {
    for (let i = 1; i < num; i++) {
      repeat = repeat+str;
    }
  }
  return repeat;
}

repeatStringNumTimes("abc", 3);