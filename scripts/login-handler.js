// All login-related functions go here

// () -> ()
// Shows the login dialog, darkens the background
function toggleLoginOverlay() {
  document.getElementById('container').classList.toggle('show-login-overlay');
  document.getElementById('login-user-text').focus();
}

// () -> ()
function toggleLoginPane() {
  document.getElementById('login-overlay').classList.toggle('show-signup-pane');
  document.getElementById(
    (document.getElementById('login-overlay').classList.contains('show-signup-pane'))
    ? 'signup-email-text' : 'login-user-text').focus();
}

// () -> ()
function loginSubmit() {
  var user = document.getElementById('login-user-text').value;
  var pass = document.getElementById('login-pass-text').value;
  if (validateLoginCredentials(user, pass)) {
    toggleLoginOverlay();
  } else {
    alert("Bad user/pass combination!");
  }
}

//function signupSubmit() {
//  var email = document.getElementById
//}

// String String -> Boolean
function validateLoginCredentials(user, pass) {
  return true;
}

function signupSubmit() {
  var email = document.getElementById('signup-email-text').value;
  var user = document.getElementById('signup-user-text').value;
  var pass = document.getElementById('signup-pass-text').value;
  if (validateSignupCredentials(email, user, pass)) {
    toggleLoginOverlay();
  } else {
    alert("Uh, oh. Something went bad!");
  }
}

function validateSignupCredentials(email, user, pass) {
  return true;
}