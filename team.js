// consider adding a document.onload so that is runs after the HTML file is loaded.

var test_phrase = "Hello World"

document.write("Please type the test phrase: " + test_phrase)
// should the above two lines be in the DOM (html) instead of in your javascript file?

var start = Date.now();
var response = prompt("Type the phrase " + "'" + test_phrase + "'");
var end = Date.now();

if (test_phrase === response){
  var answer = "you got it right!";
}
else{
  var answer = "you got it wrong!";
}

var elapsed = (end - start) / 1000;
// consider naming varialbe something like timeInSeconds

document.write(" You took " + elapsed + " seconds" + " to type: " + response + " and " + answer);
// consider putting this inside of an element instead of just writing to the document.  
