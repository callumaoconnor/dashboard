const newPassword = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')
const accountForm = document.getElementById('update-account')
const button = document.getElementById('update-account-button')
const username = document.getElementById('username')
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
var usern = /^[A-Za-z]\w{3,14}$/;

newPassword.addEventListener('input', function() {

		if((newPassword.value.match(passw) && newPassword.value == passwordConfirm.value || newPassword.value == "" && passwordConfirm.value == "") && (username.value.match(usern) || username.value == "")) {
    button.style.backgroundColor = "#2399d5"
    button.style.color = "white"
    button.disabled = false 
  } else {
    button.style.backgroundColor = "gray"
    button.disabled = true
    button.style.color = "darkgray"
    }
  })

newPassword.addEventListener('input', function() {

		if(newPassword.value.match(passw) || newPassword.value == "") {
    message.style.display = "none"
  } else {
    message.style.display = "block"
    }
  })

passwordConfirm.addEventListener('input', function() {

		if((newPassword.value.match(passw) && newPassword.value == passwordConfirm.value || newPassword.value == "" && passwordConfirm.value == "") && (username.value.match(usern) || username.value == "")) {
    button.style.backgroundColor = "#2399d5"
    button.style.color = "white"
    button.disabled = false 
  } else {
    button.style.backgroundColor = "gray"
    button.disabled = true
    button.style.color = "darkgray"
    }
  })

username.addEventListener('input', function() {

		if((newPassword.value.match(passw) && newPassword.value == passwordConfirm.value || newPassword.value == "" && passwordConfirm.value == "") && (username.value.match(usern) || username.value == "")) {
    button.style.backgroundColor = "#2399d5"
    button.style.color = "white"
    button.disabled = false
  } else {
    button.style.backgroundColor = "gray"
    button.disabled = true
    button.style.color = "darkgray"
    }
})

username.addEventListener('input', function() {

		if(username.value.match(usern) || username.value == "") {
    usernamemessage.style.display = "none"
  } else {
    usernamemessage.style.display = "block"
    }
})
