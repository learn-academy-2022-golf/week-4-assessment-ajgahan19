// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("arrShuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const outPut1 = ["yellow", "blue", "pink", "green"]
            // can be different order
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        const outPut2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
            // can be different order

      expect(arrShuffle(colors1)).toEqual(expect.arrayContaining(outPut1))
      expect(arrShuffle(colors2)).toEqual(expect.arrayContaining(outPut2))
    })
  })
// test 1 -    ReferenceError: arrShuffle is not defined
// test 2 -    Pass
  

// b) Create the function that makes the test pass.
  //create function called arrShuffle
  //Pass arrShuffle an argument of arr
  //within function, use .shift mutator to remove initial element in array
  //return shuffled array using .sort built-in method passed an anonymous function of Math.random subtracted by 0.5. This will generate either a positive or negative number for .sort to use each comparison, somewhat randomizing output.
    //NOTE: This problem stumped me for a few hours. Several attempts at .maps and for loops later I couldn't invent a satisfying way to randomize the array. This answer was found through outside resources and put into my function. There is apparently a more efficient and truly random code that can be used, but I didn't understand the logic well enough to feel good about using it as an answer here.

const arrShuffle = (arr) => {
    arr.shift()
    return arr.sort(() => Math.random() - 0.5)
    }
    



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

describe("voteCount", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally.", () => {
        const votes1 = {upVotes: 13, downVotes: 2}
        const outPut1 = 11
        const votes2 = {upVotes: 2, downVotes: 33}
        const outPut2 = -31
      expect(voteCount(votes1)).toEqual(outPut1)
      expect(voteCount(votes2)).toEqual(outPut2)
    })
  })
// test 1 -    ReferenceError: voteCount is not defined
// test 2 -    Pass
  

// b) Create the function that makes the test pass.
//create function called voteCount
//pass voteCount parameter of object
// within function, destructure object for simple targeting of object values
// return difference of upVotes value and downVotes value

const voteCount = (object) => {
    let { upVotes, downVotes } = object
    return upVotes - downVotes
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("fuseNoDupes", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        const outPut = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
      expect(fuseNoDupes(dataArray1, dataArray2)).toEqual(outPut)
    })
  })
// test 1 -     ReferenceError: fuseNoDupes is not defined
// test 2 -     Pass


// b) Create the function that makes the test pass.
//create function called fuseNoDupes
//pass function two paramaters, both arrays
// within function, return given arrays combined with .concat built in method
// in .concat argument, use .filter higher order function on second array to return only items not found in first array. This can be done with .indexOf built in method, if value does not exist in first array it will return a -1.

const fuseNoDupes = (arr1, arr2) => {
    return arr1.concat(arr2.filter(value => arr1.indexOf(value) < 0))


}



describe("colors", () => {
     it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
     const colorsOutput1 = ["yellow", "blue", "pink", "green"]
     const colors2 = ["indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
     const colorsOutput2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
     expect(colors(colors1)).not.toEqual(expect.not.arrayContaining(colorsOutput1))
     expect(colors(colors2)).not.toEqual(expect.not.arrayContaining(colorsOutput2))
     })
 })



 // The .not.toEqual makes a huge difference. 
 // I spent alot of time on the this one, until i realized that the nots make a difference
 // I saw one forum where there wasnt a "not" in the it statement it wouldnt pass. Clearly that doesnt work. 


 // b) Create the function that makes the test pass.

 // Create a function that takes in an array of colors 
 // **Remember that this is an array. 
 // I used the Javascript Array page on the syllabus to find slice. 
 // I tried shuffle(array) that didnt work. 
 // After doing my due diligence, with the syllabus, I went online. 
 // So with the first index, we can now use .sort, to modify the output of the array 
 // I used google, using phrases array.sort, and random, and found this equation.


 const colors = (array) =>{
     let rand = array.slice(1)
     return array.sort((a,b) => 0.5 - Math.random())
 }

 // PASS  ./code-challenges.test.js
 // colors
 //   ✓ takes in an array, removes the first item from the array and shuffles the remaining content. (3 ms)

 // Test Suites: 1 passed, 1 total
 // Tests:       1 passed, 1 total
 // Snapshots:   0 total
 // Time:        0.42 s, estimated 1 s
 // Ran all test suites.
 // ✨  Done in 1.07s.



