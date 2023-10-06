function findLongestWordLength(str) {
  const words = str.split(" ");
  let len = 0;
  for (const i in words) {
    if (words[i].length > len) {
      len = words[i].length;
    }
  }
  return len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");