// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".
const capitalizeWords = function(messege){
      const messegeArr = messege.split(" ")
      let newMessege = []
      for (let i = 0; i < messegeArr.length; i++){
            newMessege.push(messegeArr[i].charAt(0).toUpperCase() + messegeArr[i].slice(1))
            
      }
      return newMessege.join(" ")
}


console.log(capitalizeWords("hello world")); // Expected output: "Hello World"