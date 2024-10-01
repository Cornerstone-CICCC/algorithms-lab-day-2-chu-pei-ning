// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = function (string, word) {
      const stringArr = string.split(" ")
      console.log(stringArr)
      let results = 0
      
      for (let i = 0; i < stringArr.length; i++) {
            if ( stringArr[i] === word ) {
                  results = results + 1
            }
      }
      return results
      
}

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2