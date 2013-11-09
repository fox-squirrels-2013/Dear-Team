

function run() {
  var currentIndex = 0
  var string = getString() // returns a string
  displayString(string) // return nothing

  while currentIndex <= string.length // or maybe until finished?
    var currentChar = testChar(currentIndex) //returns test character
    var currentKeystroke = capturedKeystroke() //returns keystroke
    var charsMatch = comparison(currentChar, currentKeystroke)
    accuracy(charsMatch)
    var finished = finished(SOMETHING) // not sure what the finished method recieves as an argument

}

run()

//NOT SURE HOW OR WHERE THESE NEED TO BE IMPLEMENTED
function preventTypingToScreen()
function timeMethod()
