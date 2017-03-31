// business logic
var pingArray = ["pingpong", "ping", "pong"]
var numbersTest = function(userInput) {
  pingarray.forEach(function(ping){
    if (userInput % 15 === 0) {
      return pingArray[0];
    } else if (userInput % 3 == 0) {
      return pingArray[1]
    } else if (userInput % 5 === 0) {
      return pingArray[2]
    } else {
      return userInput;
    };
  };
});
//user interface logic
$(document).ready(function(){
  $("form#number-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input[name=number]").val();
    var result = numbersTest(userInput);
    this.reset();
    $(".results").show();
    $(".results").append("<li>" + result +"</li>");
  });
});
