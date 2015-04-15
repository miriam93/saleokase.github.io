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
