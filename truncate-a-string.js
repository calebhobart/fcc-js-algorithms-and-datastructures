function truncateString(str, num) {
  let truncated = str.substring(0,num);
  if (num >= str.length) {
    return truncated;
  }
  return truncated + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);