let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D{1,}\d{2})/; // Change this line
let result = pwRegex.test(sampleWord);