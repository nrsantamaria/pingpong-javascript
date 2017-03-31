// business logic
var numbersTest = function(userInput) {
  var pingsArray = ["ping", "pong"];
    if (userInput % 15 === 0) {
      return pingsArray.join('');
    } else if (userInput % 3 == 0) {
      return pingsArray[0]
    } else if (userInput % 5 === 0) {
      return pingsArray[1]
    } else {
      return userInput;
    };
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
