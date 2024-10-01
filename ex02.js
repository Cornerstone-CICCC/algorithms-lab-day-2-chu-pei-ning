// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

const arrayDifference = function(arr1, arr2 ){
      for (let i = 0; i < arr1.length; i++) {
            if ( ! arr2.includes(arr1[i]) ) {
                  return arr1[i]
            }
            return "everything is same"
      }
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]