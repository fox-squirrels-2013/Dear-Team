// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

var timeTakenToFinish
var wrongEntryCount = 0
var correctEntryCount = 0
var currentIndex = 0

var test_list = ["Get a dog up ya flanno mate built like a paddock",
            "He's got a massive esky, he hasn't got a kelpie",
            "A peculiar and not very pleasant smell was smelt in the sea",
            "Yes, I'm for it; and so saying he started for the quarter-deck.",
            "The upper part of her stem-piece was carved in the likeness of a huge drooping stalk'",
            "Get a dog up ya barbie. Also he hasn't got a chance to hit the turps",
            "Then later, Leela made the film",
            "And you will know My name is the Lord when I lay My vengeance upon thee.",
            "Do you see any Teletubbies in here?",
            "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men.",
            "Enough about your promiscuous mother, Hermes!",
            "Why not indeed! I meant 'physically'. Look, perhaps you could let me work for a little food?",
            "He's got a massive rort with she'll be right mate's rate"];

var getString = function(){
  return test_list[randomIndex(test_list.length)];
};

var randomIndex = function(list_length){
   return Math.floor((Math.random()*list_length));
};

var gameFinished = function(){
    if (test_string.length <= currentIndex){
        return true;
    }
    else {
        return false;
    }
}

function accuracy(result) {
  if (result) {
    currentIndex += 1
    correctEntryCount += 1;
  }
  else {
    wrongEntryCount += 1;
  }
}

function test_char(test_string){
  return test_string[currentIndex]
}

function printCharToScreen(status, character){
  if (status === true){
    console.log(character + ' incorrect keystrokes: ' + wrongEntryCount)
  }
}

function comparison(a, b) {
  return a.toLowerCase() === b.toLowerCase()
}

function displayString(string){
  console.log(string)
}

// IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
// EXISITING CODE BASE



window.onload=function(){

var test_string = getString()

function run() {
  // var test_string = getString() // returns a string
  displayString(test_string) // return nothing, manipulates the DOM

window.addEventListener('keypress', function(e){
   var character = String.fromCharCode(e.keyCode)
   evaluate_loop(character)
})

  // while currentIndex <= string.length // or maybe until finished?
var evaluate_loop = function(capturedKeystroke){
    if (! gameFinished()){
      var currentChar = test_char(test_string) //returns test character
      // Nuked the assignment like for capturedKeystroke and just put it straight into comparison //returns keystroke

      var charsMatch = comparison(currentChar, capturedKeystroke)
      accuracy(charsMatch)
      printCharToScreen(charsMatch, capturedKeystroke)
      }
    // gameFinished() // not sure what the finished method recieves as an argument
    }
}
  
run()

//NOT SURE HOW OR WHERE THESE NEED TO BE IMPLEMENTED
// function timeMethod()
}
