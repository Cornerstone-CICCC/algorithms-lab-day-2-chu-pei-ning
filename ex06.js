// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

const getQueryParams = function ( url ) {

      const splitUrl = url.split("?")
      const needUrl = splitUrl[1].split("&")

      let useNeedUrl = []
      for (let i = 0; i < needUrl.length; i++){
            useNeedUrl.push(needUrl[i].split("="))
      }

      return Object.fromEntries(useNeedUrl)

}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }