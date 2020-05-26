// Assignment Code
var generateBtn = document.querySelector("#generate");
  var lowerList = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numberList = "0123456789".split("");
  var specialList = "!#$%&'()*+,-./:;<=>?@[\"]^_`{|}~".split("");
  var result = [];


// Write password to the #password input
function writePassword() {

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
    console.log(result);
  }
  // Confirm Uppercase
  var uppercase = confirm("Would you like to include uppercase letters?");
  if (uppercase === true) {
    result = result.concat(upperList);
    console.log(result);
  }
  // Confirm Numbers
  var number = confirm("Would you like to include numbers?");
  if (number === true) {
    result = result.concat(numberList);
    console.log(result);
  }

  // Confirm Special Characters
  var special = confirm("Would you like special characters?");
  if (special === true) {
    result = result.concat(specialList);
    console.log(result);
  }


  // you can create a function named generatePassword that creates the password
  function generatePassword() {
    if (lowercase === false && uppercase === false && 
      number === false && special === false) {
        alert ("You must select at least one character type!");
      } else {
        for (var i = 0; i < charLength; i++) {
          password = result[Math.floor(Math.random() * result.length) + 1];
          console.log(password);
          var passwordText = document.querySelector("#password");
          passwordText.value = password;
        }
         
      }
      
  }

  var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  // for (var i = 0; i < charLength; i++) {
  //   result.push();
  //   console.log(result);
  // }

  // result.join('');