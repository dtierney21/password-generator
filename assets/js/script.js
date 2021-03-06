// Assignment Code
var generateBtn = document.querySelector("#generate");
var setParamsBtn = document.querySelector('#set-params');
// Get the modal
var modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var numericCharacters = '1234567890';
var specialCharacters = '!@#$%^&*';

function setParams() {
    modal.style.display = "block";
}

// Write password to the #password input
function writePassword() {
    console.log('writing password')
    var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  modal.style.display = "none";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Add event listener to set-params button
setParamsBtn.addEventListener('click', setParams);

// something
function generatePassword() {
    console.log('generating password')
    var length = document.getElementById('length').value;
    console.log('length: '+length)
    var password = '';
    var characterSet = getCharacters();
    console.log('char set: ' + characterSet);
    var charactersLength = characterSet.length;

    for (var i=0; i<length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * charactersLength));
     }
     console.log('password: '+password);
     
    return password;
}

function getCharacters(){
    console.log('getting characters')
    var characterSet = '';
    if(document.getElementById('lowercase').checked) {
        characterSet += lowercaseCharacters;
    }
    if(document.getElementById('uppercase').checked) {
        characterSet += uppercaseCharacters;
    }
    if(document.getElementById('numeric').checked) {
        characterSet += numericCharacters;
    }
    if(document.getElementById('special').checked) {
        characterSet += specialCharacters;
    }

    return characterSet;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}