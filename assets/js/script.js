// Assignment Code
var generateBtn = document.querySelector("#generate");
  var lowerList = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numberList = ["0","1","2","3","4","5","6","7","8","9"];
  var specialList = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",",",":",";","<","=",">","?","@","]","}","[","{","^","_","`","|","~"];

  //  \, 

// Write password to the #password input
function writePassword() {
  var result = [];

  // Specify password length of at least 8 to no more than 128 characters
  var charLength = prompt("How many characters would you like? (8-128)");
  if (isNaN(charLength) || charLength == "") {
    alert ("Input a number in numeric form.");
    return;
  } else if (charLength < 8 || charLength > 128) {
    alert ("Choose a number that is at least 8 and no more than 128.")
    return;
  }
    else {
      charLength = parseInt(charLength);
      console.log(charLength);
  }

  // Confirm Lowercase
  var lowercase = confirm("Would you like to include lowercase letters?");  
  if (lowercase === true) {
    result = result.concat(lowerList);
  } else {

  }
  // Confirm Uppercase
  var uppercase = confirm("Would you like to include uppercase letters?");
  if (uppercase === true) {
    result = result.concat(upperList);
  } else {
  }
  // Confirm Numbers
  var number = confirm("Would you like to include numbers?");
  if (number === true) {
    result = result.concat(numberList);
  } else {
  }

  // Confirm Special Characters
  var special = confirm("Would you like special characters?");
  if (special === true) {
    result = result.concat(specialList);
  } else {
  }

  // you can create a function named generatePassword that creates the password
  // var password = '';
  function generatePassword() {
    var password = '';
    var passwordText = document.querySelector("#password");

    if (lowercase === false && uppercase === false && 
      number === false && special === false) {
        alert ("You must select at least one character type!");
      } else {        
        for (var i = 0; i < charLength; i++) {
          password += result[Math.floor(Math.random() * result.length) + 1];
        }
        passwordText.value = password;
      }
      
  }

  var password = generatePassword();

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
