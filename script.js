
//1. serious of prompt for password criteria(message added but still in progress)
//  a.password lenght 8<128
// b. lowercase,uppercase and special characters
//2. validate the input 
//3. generate password based on criteria
//4. display generated password on page.(done)
//Making arrays for the characters that will be used 

document.querySelector("#generate").addEventListener("click", writePassword);


var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x" , "y", "z"];
var number = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

//Declaring variables written above
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumberCharacter;
var confirmSymbolCharacter;

function generatePassword () {
  var confirmLength = (prompt("How many characters do you want password to have?"));

  //going back to prompt if outside of parameters
while(confirmLength < 8 || confirmLength > 128) {
  alert("Password length has to be between 8-128 characters");
  var confirmLength = (prompt("How many characters do you want password to contain?"));

}

  //Repeat how many characters it will have
  alert('Your password is going to have ${confirmLength} characters');

//Using variables for the parameters of the password
var confirmUpperCase = confirm("Click OK to confirm if user would like uppercase characters");
var confirmLowerCase = confirm("Click OK to confirm if user would like lowercase characters");
var confirmNumberCharacter = confirm("Click OK to confirm if user would like numerical characters");
var confirmSymbolCharacter = confirm("Click OK to confirm if user would like symbol characters");
  //making loop if none is being chosen 
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSymbolCharacter === false && confirmNumberCharacter === false)
    alert ("You must use one criteria");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include special characters");
    var confirmLowerCase = confirm("Click OK to confirm if user would like to include lowercase characters");
    var confirmNumberCharacter = confirm("Click OK to confirm if user would like numerical characters");
    var confirmSymbolCharacter = confirm("Click OK to confirm if user would like symbol characters");

}

//See what to do but will add password parameters

var passwordCharacters = []

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat (upperCase)
}

if (confirmLowerCase) {
  passwordCharacters = passwordCharacters.concat (lowerCase)
}

if (confirmNumberCharacter) {
  passwordCharacters = passwordCharacters.concat (number)
}

if (confirmSymbolCharacter) {
  passwordCharacters = passwordCharacters.concat (symbol)
}

  console.log(passwordCharacters)

  //String to fill on loop selecting random numbers from the arrays
  var randomPassword= ""

  for (var i=0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters [Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)

  }
  

// Assignment Code
//References to #generate element
var generateBtn = document.querySelector("#generate");

//Writing password in the input

function generatePassword() {

  console.log("you did it remember to save!?");
  return "Password will be added here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
