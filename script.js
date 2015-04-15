var searchOption = "event";

// () -> ()
// Adds a listener for the esc key to exit dialogs
function setup() {
  var ESC_KEY_CODE = 27;
  document.addEventListener('keydown', function(e) {
    e = e || window.event;
    var container = document.getElementById('container');
    if (e.keyCode == ESC_KEY_CODE) {
      if (container.classList.contains('show-login-overlay')) {
        toggleLoginOverlay();
      } else if (container.classList.contains('show-context-sidebar')) {
          toggleContext();
      }
    }
  }, false);
}

// () -> ()
// Sets the search query to users, updates the button style
function searchUsers() {
  searchOption = "user";
  document.getElementById('search-user-button').style.backgroundColor = "#DADADA";
  document.getElementById('search-event-button').style.backgroundColor = "#C0C0C0";
}

// () -> ()
// Sets the search query to events, updates the button style
function searchEvents() {
  searchOption = "event";
  document.getElementById('search-event-button').style.backgroundColor = "#DADADA";
  document.getElementById('search-user-button').style.backgroundColor = "#C0C0C0";
}

// Event -> ()
function searchKeyPress(e) {
  var ENTER_KEY_CODE = 13;
  e = e || window.event;
  if (e.keyCode == ENTER_KEY_CODE) {
    var query = e.target.value;
    e.target.value = "";
    searchQuery(query, searchOption);
  }
}

function searchButtonPress() {
  var query = document.getElementById('search-input').value;
  searchQuery(query, searchOption);
}

// String, Function -> ()
// Prints to the console the query parameters
function searchQuery(query, type) {
  console.log(type);
  console.log(query);
}

// () -> ()
// Toggles the context sidebar animation
function toggleContext() {
  document.getElementById('container').classList.toggle('show-context-sidebar');
}

// () -> ()
// Toggles the main sidebar animation
function toggleMenu() {
  document.getElementById('container').classList.toggle('show-main-sidebar');
}

// () -> ()
// Shows the login dialog, darkens the background
function toggleLoginOverlay() {
  document.getElementById('container').classList.toggle('show-login-overlay');
  showLoginBox();
}

// () -> ()
// Shows the login box
function showLoginBox() {
  removeSignupBox();
  document.getElementById('dialog-box').classList.add('show-login-box');
}

// () -> ()
// Shows the signup box
function showSignupBox() {
  removeLoginBox()
  document.getElementById('dialog-box').classList.add('show-signup-box');
}

// () -> ()
// Hides the login box
function removeLoginBox() {
  document.getElementById('dialog-box').classList.remove('show-login-box');
}

// () -> ()
// Hides the signup box
function removeSignupBox() {
  document.getElementById('dialog-box').classList.remove('show-signup-box');
}

/*--Función para comprobar que la contraseña no se repite en el SingUp--*/
// function validarForm(form1) {
  
//   if(form1.password.value!=form1.repassword.value) {
//     form1.password.focus();            //comprueba que sean iguales
//     alert('Los contraseñas no coinciden');
//     return false;
//   }
//   return true; 
// }
