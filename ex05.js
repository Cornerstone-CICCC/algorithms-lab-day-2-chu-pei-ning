// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = function (str) {

      const noVowels = str.replace(/[aeiou]/gi, '')
      const noSpace = noVowels.split(" ").join("")
      const count = noSpace.length

      return count


}


console.log(countConsonants("hello world")); // Expected output: 7