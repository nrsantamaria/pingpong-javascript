//user interface logic
var Calculator = require('./../js/pingpong.js').calculatorModule;
// accesses the calculator module and creates a variable so the function can be used.

$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
    var goal = $("#number").val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $(".results").append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});
