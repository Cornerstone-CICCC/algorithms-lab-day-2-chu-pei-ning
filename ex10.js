// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = function(messege){
      const messegeToArr = messege.split("")
      let messegeArr = []
      for (let i = 0; i < messegeToArr.length; i++) {
            if (messegeToArr.includes("-")) {
                  messegeArr = messege.split("-")
            }
            if (messegeToArr.includes("_")) {
                  messegeArr = messege.split("_")
            }
      }
      console.log(messegeArr)
      let newMessege = [messegeArr[0]]
      for (let i = 1; i < messegeArr.length; i++){
            newMessege.push(messegeArr[i].charAt(0).toUpperCase() + messegeArr[i].slice(1))
            
      }
      return newMessege.join("")
}




console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"