// Assignment Code
var generateBtn = document.querySelector('#generate');
var setParamsBtn = document.querySelector('#set-params');
// Get the modal
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
var numericCharacters = '1234567890';
var specialCharacters = '!@#$%^&*';

function setParams() {
    modal.style.display = 'block';
}

// Write password to the #password input
function writePassword() {
    console.log('writing password');
    var validPassword = validateInput();
    console.log('valid password: ' + validPassword);
    if (validPassword == 'Valid') {
        var password = generatePassword();
        var passwordText = document.querySelector('#password');

        passwordText.value = password;

        modal.style.display = 'none';
    } else window.alert(validPassword);
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
// Add event listener to set-params button
setParamsBtn.addEventListener('click', setParams);

// Generate the password using the selected length and cahracter set
function generatePassword() {
    console.log('generating password');
    var length = document.getElementById('length').value;
    console.log('length: ' + length);
    var password = '';
    var characterSet = getCharacters();
    console.log('char set: ' + characterSet);
    var charactersLength = characterSet.length;

    for (var i = 0; i < length; i++) {
        password += characterSet.charAt(Math.floor(Math.random() * charactersLength));
    }
    console.log('password: ' + password);

    return password;
}

// Build a charcter set based on the users selections
function getCharacters() {
    console.log('getting characters');
    var characterSet = '';
    if (document.getElementById('lowercase').checked) {
        characterSet += lowercaseCharacters;
    }
    if (document.getElementById('uppercase').checked) {
        characterSet += uppercaseCharacters;
    }
    if (document.getElementById('numeric').checked) {
        characterSet += numericCharacters;
    }
    if (document.getElementById('special').checked) {
        characterSet += specialCharacters;
    }

    return characterSet;
}

// Validate the user's inputs
function validateInput() {
    console.log('length: ' + document.getElementById('length').value);
    if (document.getElementById('length').value < 8 || document.getElementById('length').value > 128) {
        return 'Password must be between 8 and 128 characters in length.';
    } else if (
        document.getElementById('lowercase').checked == false &&
        document.getElementById('uppercase').checked == false &&
        document.getElementById('numeric').checked == false &&
        document.getElementById('special').checked == false
    ) {
        return 'Please select which characters you would like to include in the password.';
    } else return 'Valid';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
