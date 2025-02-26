// The typewriter element
var typeWriterElement = document.getElementById("typewriter");

// The TextArray:
var textArray = ["Web Developer", "Virtual Assistant"];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');

// function to generate the backspace effect
function delWriter(text, i, cb) {
  if (i >= 0) {
    typeWriterElement.innerHTML = text.substring(0, i--);
    // generate a random Number to emulate backspace hitting.
    var rndBack = 10 + Math.random() * 100;
    setTimeout(function () {
      delWriter(text, i, cb);
    }, rndBack);
  } else if (typeof cb == "function") {
    setTimeout(cb, 1000);
  }
}

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
  if (i < text.length + 1) {
    typeWriterElement.innerHTML = text.substring(0, i++);
    // generate a random Number to emulate Typing on the Keyboard.
    var rndTyping = 250 - Math.random() * 100;
    setTimeout(function () {
      typeWriter(text, i++, cb);
    }, rndTyping);
  } else if (i === text.length + 1) {
    setTimeout(function () {
      delWriter(text, i, cb);
    }, 100);
  }
}

// the main writer function
function StartWriter(i) {
  if (typeof textArray[i] == "undefined") {
    setTimeout(function () {
      StartWriter(0);
    }, 100);
  } else if (i < textArray[i].length + 1) {
    typeWriter(textArray[i], 0, function () {
      StartWriter(i + 1);
    });
  }
}
// wait 0.5 second then start the typewriter
setTimeout(function () {
  StartWriter(0);
}, 100);
