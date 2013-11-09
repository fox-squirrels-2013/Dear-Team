// At the top of script, just going to have a list of variables the program uses
var timeTakenToFinish
var wrongEntryCount
var correctEntryCount
var currentIndex = 0
var test_string

window.onload=function(){

//var test_phrase = "Hello World"

//document.write("Please type the test phrase: " + test_phrase)
// document.write(<br>)
var start = Date.now();
// var input = prompt("Type that as fast as you can")
// var response = prompt("Type the phrase " + "'" + test_phrase + "'");
var end = Date.now();

// if (test_phrase === response){
//   var answer = "you got it right!";
// }
// else{
//   var answer = "you got it wrong!";
// }
//document.write(" You took " + elapsed + " seconds" + " to type: " + response + " and " + answer);

// Here the coder assumes that the code after prompt will not execute until the user has hit enter on the prompt.

// compare test_phrase to input and return accuracy
//return accuracy
// console.log("Your score was " + accuracy)

//_________________________miya____________________________

// ACCURACY FUNCTION

var correct = 0;
var incorrect = 0;

var result = true

function accuracy(result) {
  if (result) {
    correct += 1;
    return correct
  }
  else {
    incorrect += 1;
    return incorrect
  }
}

accuracy(result)

var accuracy_counter = document.getElementById('accuracy_score');
accuracy_counter.innerHTML = 'this will be the accuracy score'

var time_counter = document.getElementById('time');
time_counter.innerHTML = elapsed

var correct_counter = document.getElementById('correct_score');
correct_counter.innerHTML = correct

var incorrect_counter = document.getElementById('incorrect_score');
incorrect_counter.innerHTML = incorrect

var string_display = document.getElementById('test_string');
string_display.innerHTML = "this will connect to the 'getString' function / HTML 'test_string'"

var game_finished_display = document.getElementById('game_finished');
game_finished_display.innerHTML = "this will connect to the 'gameFinished?'' function / HTML"

}
