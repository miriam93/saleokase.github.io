// () -> ()
// Toggles the show-context-sidebar class in the container
function toggleNav() {
  document.getElementById('container').classList.toggle('show-context-sidebar');
}

function extendSide() {
  document.getElementById('container').classList.toggle('show-main-sidebar');
}

// Snippets taken from http://javascript.info/tutorial/animation

// String -> ()
// Shows the element with the given id
function extend_sidebar(elementid) {
  var elem = document.getElementById(elementid);
  elem.style.left = "66.666%";
}

// String -> ()
// Hides the element with the given id
function collapse_sidebar(elementid) {
  var elem = document.getElementById(elementid);
  // If already collapsed, do nothing
//  if (parseInt(elem.style.left) != 620) {
//    return;
//  }
  
  elem.style.left = "100%";
//  elem.style.left = "-999pt";
//  move(elem, makeEaseOut(function(p) {
//    return Math.pow(p, 2);
//  }), (parseInt(elem.parentNode.offsetWidth) / 3), 700);
}

// fn -> fn
// Reverses the given function
function makeEaseOut(delta) {  
  return function(progress) {
    return 1 - delta(1 - progress);
  };
}

// HTMLElement, fn, Number, Natural -> ()
// Moves number pixels the given HTMLElement with the supplied delta
// and duration provided
// Duration may be omitted in favor of the default value of 1000 (1s)
function move(element, delta, to, duration) {
  animate({
    delay: 10,
    duration: duration || 1000, // 1 sec by default
    delta: delta,
    step: function(delta) {
      element.style.left = to * delta + "pt";
    }
  });
}

// Object -> ()
// Animates the given Object according to the supplied properties
// Object must contain:
// - delay
// - duration
// - delta (function)
// - step (function)
function animate(opts) {
  var start = new Date; 
  var id = setInterval(function() {
    var timePassed = new Date - start;
    var progress = timePassed / opts.duration;

    if (progress > 1) {
      progress = 1;
    }
    
    var delta = opts.delta(progress);
    opts.step(delta);
    
    if (progress == 1) {
      clearInterval(id);
    }
  }, opts.delay || 10);
}
