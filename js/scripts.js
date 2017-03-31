//business logic
var numbersTest = function(userInput){
  var pingArray = [pingpong, ping, pong]
  var userInputSubstring = userInput.substring(0);

  if (pingpong = true){
    return text;
  } else if (ping = true){
    return text;
  } else if (pong = true){
    return text;
  } else {
    return userInputSubtring.text();
  }

//numbers divisible by 15
  var pingpong = function(pp){
    var i = 0;
    var text = "";
    while (i%15 = 0) {
      text += "pingpong";
      i++;
    };
    return text;
  };
//numbers divisible by 3
  var ping = function(pi){
    var i = 0;
    var text = "";
    while (i%3 = 0){
      text += "ping";
      i++;
    };
    return text;
  };
//numbers divisible by 5
  var pong = function(po){
    var i = 0;
    var text = "";
    while (i%5 = 0){
      text += "pong";
      i++;
    };
    return text;
  };

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
