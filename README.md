# _Ping Pong Numbers Game_

### By Nicole Santamaria and Niklas Long

#### By _**Nicole Santamaria**_

## Description

_This webpage is a form with which collect a number from the user. There number will be checked to see if it is divisible by 3, 5, or 15. If it is it will display the text "ping", "pong" or "pingpong". If it is not it will display their original number back to them._

##Specs
1. Site must collect a number, if a number is not submitted and error message will appear.
	- Input: apple
	- Output: Error: please submit a number
2. If the number the user entered is divisible by 15, the output will show the text “pingpong”. This will use the % operator to compare result of the user input and 15 and determine if the result is equal 0.
	- Input: 15
	- Output: “pingpong”
3. If the number the user enters is divisible by 3, the output will show the text “ping”. This will use the % operator to compare result of the user input and 3 and determine if the result is equal 0.
	- Input: 3
	- Output: “ping”
4. If the number the user entered is divisible by 5, the output will show the text “pong”. This will use the % operator to compare result of the user input and 5 and determine if the result is equal 0.
	- Input: 5
	- Output: “pong”
5. Site will collect a number and return the number on the screen at the bottom of the page if none of the above constraints are met.
	- Input: 17
	- Output: 17

## Installation
	* `git clone https://github.com/nrsantamaria/alarm`
	* `cd alarm`
	* `npm install`
	* `bower install`

## Running / Development
* `open index.html`

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Please contact Nicole Santamaria at NicoleRSantamaria@gmail.com if you have any questions._

### License

*This software is licensed under MIT license.*

Copyright (c) 2017 **_Nicole Santamaria_**
