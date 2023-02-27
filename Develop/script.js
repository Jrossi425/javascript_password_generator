// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var passwordOptions = parseInt(prompt("How long would you like youre password to be?"));
if(passwordOptions < 8 || passwordOptions > 128) {
  alert("Password must be between 8 and 128 characters.")
  generatePassword()
}

var wantsUppercase = confirm("Do you want uppercase characters?")
var wantsLowercase = confirm("Do you want lowercase characters?")
var wantsSpecialcharacters = confirm ("Do you want special characters?")
var wantsNumbers = confirm ("Do you want numbers?")

if (!wantsUppercase && !wantsLowercase && !wantsSpecialcharacters && !wantsNumbers) {
  alert("Please choose one of the options.")
  generatePassword()
}

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "=", "-", "+"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var choices = []

if(wantsUppercase) {choices=choices.concat(uppercase)}
if(wantsLowercase) {choices=choices.concat(lowercase)}
if(wantsSpecialcharacters) {choices=choices.concat(special)}
if(wantsNumbers) {choices=choices.concat(numbers)}
console.log(choices)

var password = ""
for(var i = 0;i < passwordOptions; i++) {
  var randomIndex = Math.floor(Math.random()*choices.length)
  password += choices[randomIndex]
  console.log(password)
}

return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

