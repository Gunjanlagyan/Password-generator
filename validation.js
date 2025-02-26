const passwordbox = document.getElementById("NewPassword")
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*"
const addChar = upperCase + lowerCase + number + symbol

function getlength() {
  let range = document.getElementById('lengthrange')
  let rangevalue = range.value;
  passwordgenerator(rangevalue);
}

function passwordgenerator(length) {
    let password = ""
    password += upperCase[Math.floor(Math.random() * upperCase.length)]
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password += number[Math.floor(Math.random() * number.length)]
    password += symbol[Math.floor(Math.random() * symbol.length)]

    while (password.length<length) {
        password += addChar[Math.floor(Math.random() * addChar.length)];
    }
  passwordbox.value = password;
 
}
  passwordbox.disabled = true;
    
  function copypassword() {
    passwordbox.select();
    navigator.clipboard.writeText(passwordbox.value);
    Swal.fire({
      title: "Password Copied!",
      text: "Good Job, Your Paasword is copied to clipboard.",
      icon: "success"
    });
   }
   
  