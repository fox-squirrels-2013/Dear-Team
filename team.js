

var test_phrase = "Hello World"

document.write("Please type the test phrase: " + test_phrase)
// document.write(<br>)
var start = Date.now();
// var input = prompt("Type that as fast as you can")
var response = prompt("Type the phrase " + "'" + test_phrase + "'");
var end = Date.now();

if (test_phrase === response){
  var answer = "you got it right!";
}
else{
  var answer = "you got it wrong!";
}

var elapsed = (end - start) / 1000;

document.write(" You took " + elapsed + " seconds" + " to type: " + response + " and " + answer);

// // Here the coder assumes that the code after prompt will not execute until the user has hit enter on the prompt.

// // compare test_phrase to input and return accuracy
// //return accuracy
// console.log("Your score was " + accuracy)
