(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/pingpong.js":2}],2:[function(require,module,exports){
// business logic
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  var pingsArray = ["ping", "pong"];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push(pingsArray.join(''));
    } else if (i % 3 === 0) {
      output.push(pingsArray[0]);
    } else if (i % 5 === 0) {
      output.push(pingsArray[1])
    } else {
      output.push(i);
    }
  }
  return output
};

exports.calculatorModule = Calculator;
// allows the calculator module with its function to be accessed in other parts of the project.

},{}]},{},[1]);
