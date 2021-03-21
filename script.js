// creating arrays for all possible characters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = [" ", "!", "'", "#", "$", "%", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];

var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function PWQuestions (){
  var length = parseInt(prompt("Enter desired amount of characters for your password:"));

  if (length < 8){
    alert("Amount must be at least 8");
    return;
  }

  if (length > 128){
    alert("Amount must be less than 128")
    return;
  }

  confirmLower = confirm("Would you like to include lower case letters?");
  confirmUpper = confirm("Would you like to include upper case letters?");
  confirmSpecial = confirm("Would you like to include special characters?");
  confirmNumber = confirm("Would you like to include numbers?");

  if (!confirmLower && !confirmUpper && !confirmSpecial && !confirmNumber) {
    choices = alert("You must choose at least 1 option!");
    return;
  }

  var PWoptions = {
    length: length,
    lower: lower,
    upper: upper,
    number: number,
    special: special,
  }

  return PWoptions;

}

function generatePassword() {

  var questions = PWQuestions ();
  console.log(questions)

  var PWPool = [];
  console.log(PWPool)

  if (questions.special) {
    for (i=0; i < special.length; ++i) {
      PWPool.push(special[i]);
    }
  }

  if (questions.lower) {
    for (i=0; i < lower.length; ++i) {
      PWPool.push(lower[i]);
    }
  }

  if (questions.upper) {
    for (i=0; i < upper.length; ++i) {
      PWPool.push(upper[i]);
    }
  }

  if (questions.number) {
    for (i=0; i < number.length; ++i) {
      PWPool.push(number[i]);
    }
  }

  var finalPW = [];

  for (let i=0; i < questions.length; ++i) {
    var random = math.floor(math.random() * math.floor(PWPool.length));
    finalPW.push(PWPool[random])
  }

  console.log(finalPW)

  var showPW = finalPW.join('');
  console.log(showPW)

}