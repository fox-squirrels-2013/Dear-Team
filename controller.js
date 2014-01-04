var timeTakenToFinish
var wrongEntryCount = 0
var correctEntryCount = 0
var currentIndex = 0

var testList = ["If I don't kill a man every now and then, they forget who I am.",
                "There's never a man looked me between the eyes and seen a good day a'terward.",
                "Yo ho, yo ho, the frisky plank, You walks along it so, Till it goes down and you goes down To Davy Jones below!",
                "Good night. Good work. Sleep well. I'll most likely kill you in the morning.",
                "Better were the days when mastery of seas came not from bargains struck with eldritch creatures."]



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
