/* JS Object
const player = {
    name: "nico",
    points: 10,
    fat: true
};  

player.name;
player["name"];
player.sexy = "soon"; //create new property
*/

/* JS Functions
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + "and I'm " + age + " old.");
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);
*/

/* JS Object and Functions
const player = {
  name: "nico",
  sayHello: function (otherPersonsName) {
    console.log("hello " + otherPersonsName + " nice to meet you!");
  },
};

console.log(player.name);
player.sayHello("lynn");
*/

const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
