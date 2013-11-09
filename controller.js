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

var testList = ["Get a dog up ya flanno mate built like a paddock",
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
  return testList[randomIndex(testList.length)];
};

var randomIndex = function(listLength){
   return Math.floor((Math.random()*listLength));
};

var gameFinished = function(){
    if (testString.length <= currentIndex){
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
    var correct_counter = document.getElementById('correct_score');
    correct_counter.innerHTML = correctEntryCount
  }
  else {
    wrongEntryCount += 1;
    var incorrect_counter = document.getElementById('incorrect_score');
    incorrect_counter.innerHTML = wrongEntryCount
  }
}

function testChar(testString){
  return testString[currentIndex]
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

var evaluateLoop = function(capturedKeystroke){
    if (! gameFinished()){
      var currentChar = testChar(testString) 

      var charsMatch = comparison(currentChar, capturedKeystroke)
      accuracy(charsMatch)
      printCharToScreen(charsMatch, capturedKeystroke)
    } 
} 

var input = alert("Go!")
var start = Date.now();

var testString = getString()

var stringDisplay = document.getElementById('testString');
stringDisplay.innerHTML = testString

function run() {
  displayString(testString) 

  window.addEventListener('keypress', function(e){  
    var character = String.fromCharCode(e.keyCode)
    evaluateLoop(character)

    var end = Date.now();

    var time_counter = document.getElementById('time');
    time_counter.innerHTML = (end - start)/1000

  }) 
}
  
run()

}
