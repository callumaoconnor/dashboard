var _href = document.location.href;

var params = _href.split("#")[1];

var divSettings = document.getElementById("settings");
var divUsernameError= document.getElementById("username-error");
var divEmailError= document.getElementById("email-error");
var divViolationError= document.getElementById("violation");

if (params.indexOf("username_error") > -1) {
  divSettings.style.display = "flex";
  divSettings.style.opacity = "100%";
  divUsernameError.style.display = "block";
}else if (params.indexOf("email_error") > -1) {
  divSettings.style.display = "flex";
  divSettings.style.opacity = "100%";
  divEmailError.style.display = "block";
}else if (params.indexOf("username-email-error") > -1) {
 	divSettings.style.display = "flex";
  divSettings.style.opacity = "100%";
  divEmailError.style.display = "block";
  divUsernameError.style.display = "block";
}else if (params.indexOf("violation") > -1) {
 	divSettings.style.display = "flex";
  divSettings.style.opacity = "100%";
  divViolationError.style.display = "block";
}else if (params.indexOf("settings") > -1) {
 	divSettings.style.display = "flex";
  divSettings.style.opacity = "100%";
}
