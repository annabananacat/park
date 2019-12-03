$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height > 5) {
    $('#tallenough').show();
  } else if (height === 5) {
    alert("Now have fun!");
    $('#tallenough').show();
  } else {
    $('#short').show();
  }
});
