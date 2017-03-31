//business logic

//user interface logic
$(document).ready(function(){
  $("form#number-form").submit(function(event){
    event.preventDefault();
    var userInput = $("input[name=number]").val();
    var result = userInput
    $(".results").show();
    $(".results").append("<li>" + result +"</li>");
  });
});
