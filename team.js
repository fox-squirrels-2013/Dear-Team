var test_phrase = "Hello World"

console.log(test_phrase)

// // var beginning = Time()

// var input = prompt("Type that as fast as you can")
// // Here the coder assumes that the code after prompt will not execute until the user has hit enter on the prompt.

// // var end = Time()

// // compare test_phrase to input and return accuracy
// //return accuracy
// console.log("Your score was " + accuracy)

var start = Date.now();
var response = prompt("What is your name?", "");
var end = Date.now();
var elapsed = (end - start) / 1000;
document.write("You took " + elapsed + " seconds" + " to type: " + response);
