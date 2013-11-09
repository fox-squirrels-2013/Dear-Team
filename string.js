
// Release 1
var getString = function(){
  return "A string, huzzah!";
};

// Release 2
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

console.log(randomIndex(4));
console.log(getString());

// When the last test character returns true

var gameFinished = function(){
    if (test_string.length <= currentIndex){
        return true;
    }
    else {
        return false;
    }
}

var test_string = "toast"
var currentIndex = 5
console.log(gameFinished())

var currentIndex = 3
console.log(gameFinished())


var char = ''
window.addEventListener('keypress', function(e){
   var char = String.fromCharCode(e.keyCode)
   console.log(char)
})
