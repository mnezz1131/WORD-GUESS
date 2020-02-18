// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:
//   * An array of `new` Letter objects representing the letters of the underlying word
//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
// * **index.js**: The file containing the logic for the course of the game, which depends on `Word.js` and:
//   * Randomly selects a word and uses the `Word` constructor to store it
//   * Prompts the user for each guess and keeps track of the user's remaining guesses

const Letter = require("./letter")
var input = process.argv[2];

function Word(string){
    this.letterArray = string.split("")
    this.letterObjArray = function(){
        let array = []
        for(let i = 0; i < letterArray.length; i++){
            var letter = new Letter(letterArray[i], false);
            array.push(letter)
        }
        return array
    // console.log(letterObjArray)
    }
    this.guess = function(letter){
        for(let x = 0; x < this.letterObjArray; x++){
            if(this.letterObjArray[x]['_string'] === letter){
                this.letterObjArray[x].guess1()
            }
        }
    }
}

let newWord = Word("monkeys")
newWord.guess(input)

// var gtrArray = ["Fender", "Gibson", "Charvel", "Ibanez", "Schecter", "Parker", "Paul Reed Smith", "Epiphone", "ESP", "Gretsch", "Dean", "Rickenbacker", "Jackson", "Taylor", "Martin", "Washburn", "Takamine", "Yamaha", ]

// var randomItem = gtrArray[Math.floor(Math.random()*gtrArray.length)];
// console.log(randomItem);
// var lowerCase = randomItem.toLowerCase();
// console.log(lowerCase);
//  var string = lowerCase.split("");
//  console.log(string);
// string.fill("*");
// console.log(string);


// // // sets the variables letter to be Letter objects and initializes it 
// var letter = new Letter("t", );

// // calling letter guess1 methods
// letter.guess1();