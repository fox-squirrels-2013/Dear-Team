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

var testList = ["Holystone keel coffer galleon keelhaul gangplank.",
                "Gabion Admiral of the Black rigging Privateer hearties walk the plank.", 
                "Take a caulk spirits killick bilge rat red ensign hornswaggle.", 
                "Poop deck Plate Fleet reef sails mizzenmast hulk gibbet.", 
                "Hearties mizzen grapple Davy Jones' Locker deadlights dance the hempen jig.", 
                "Fluke schooner gaff poop deck Jack Tar ye.", 
                "Bilge rat gaff gibbet bilged on her anchor gun case shot.", 
                "Hearties parley hempen halter black jack loaded to the gunwalls lookout.", 
                "Blimey fire ship fathom Davy Jones' Locker loot lookout."]

                // "Cupcake jujubes candy chocolate bar!", 
                // "Sugar plum chupa chups brownie!",
                // "Jujubes muffin carrot cake tootsie roll topping!", 
                // "Lemon drops muffin sweet bonbon jelly chocolate cake!", 
                // "Cupcake sweet donut chocolate cheesecake!",
                // "Sesame snaps tootsie roll sweet roll!", 
                // "Cheesecake lemon drops fruitcake!", 
                // "Cookie macaroon wafer candy canes!", 
                // "Sugar plum sweet roll bear claw!", 
                // "Cake halvah muffin jelly beans!",
                // "Lollipop carrot cake cake jelly cotton candy!",
                // "Marshmallow sweet bonbon lollipop pie apple pie!", 
                // "Cookie jujubes apple pie cupcake!"];

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
