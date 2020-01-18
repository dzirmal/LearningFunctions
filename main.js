var message = document.getElementById('message')

var firstName = 'Reshad'
var lastName = 'Aziz'

function sayHello (firstName, lastName) {
  return `Hello ${firstName} ${lastName}!`
}

// var sayHello = (firstName, lastName) => `Hello ${firstName} ${lastName}!`

// message.innerText = sayHello(firstName, lastName)

var numberOne = 10
var numberTwo = 20

function add (numberOne, numberTwo) {
  return numberOne + numberTwo
}

// message.innerHTML = add(numberOne, numberTwo)

function minus (numberOne, numberTwo) {
  return numberOne - numberTwo
}

message.innerHTML = minus(numberOne, numberTwo)

var multiply = (numberOne, numberTwo) => {
  return numberOne * numberTwo
}

message.innerHTML = multiply(numberOne, numberTwo)
