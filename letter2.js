function Letter(value) {
this.letter = value;
this.guessed = false;

this.tostring = function() {

if (this.letter === " ") {
  this.guessed = true
  return " ";
} else if (this.guessed === false) {
  return "*"
}else {
  return this.letter;
}
}

this.guess = function(guess){
  if(guess === this.letter){
    this.guessed =  true;
  }
}
}