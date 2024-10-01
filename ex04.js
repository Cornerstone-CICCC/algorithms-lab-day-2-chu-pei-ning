// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = function( str ) {

      const strArr = str.split("")

      const countLetter = strArr.reduce((letter, current) => {
            letter[current] = (letter[current] || 0) + 1
            return letter
      }, {} )

      const countLetterIndexArr = Object.values(countLetter)
      const countLetterKeyArr = Object.keys(countLetter)

      let maxIndex = 0
      let temMax = countLetterIndexArr[0]
      for (let i = 0; i < countLetterIndexArr.length; i++) {
            if (countLetterIndexArr[i] > temMax){
                  temMax = countLetterIndexArr[i]
                  maxIndex = i
            }
      }

      return countLetterKeyArr[maxIndex]

}


console.log(mostFrequentChar("javascript")); // Expected output: "a"