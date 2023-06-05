
//number, character and letters

var upperCase = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var special = "~!#$%^&*()+=";

var completePassword;

//Event listener for generating password (reference)
var generateBtn = document.querySelector("#generate");

//Function to generate password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var all= "";

  var length = parseINT(window.prompt("How many letter do you want choose between 8 and 128"));

  if (length < 8 || length > 128) {
    alert("Error:Please enter a number 8-128 characters"); 
    var input = window.prompt("Please enter a number between 8 and 128 characters");
    length = parseInt(input);
    if (length < 8 || length > 128) {
      return alert("Error:Please enter a number between 8 and 128 characters");
    }
}

   //to see if lower case is needed
  if (window.confirm("Do you need lowercase letters?")) {
  all += lowerCase;

}

//to see if upper case is needed
  if(window.confirm("Do you need uppercase letters in password?")) {
  all += upperCase;

}

//To see if numbers are needed
if(window.confirm("Do you need numbers in password?")) {
  all+= number;

}

//To see if special characters are wanted
if(window.confirm("Do you need special characters in password?")) {
  all+= special;

}

// Loop that runs for the length of each statement
var allPass = "";
for (var i=0; i < length; i++) {
  allPass += all.charAt(Math.floor(Math.random() * all.length));  

}

//password generated returns here
return allPass;
}