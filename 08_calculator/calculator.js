let array = [10]
let numbas = array.map(Number);
let first =  numbas.shift(1);
let second = array[1];





const add = function() {
	let count = 0;
  for(let i = 0, n = numbas.length; i < n; i++) {
    count += numbas[i];
  }
  return parseInt(count);
};

const subtract = function() {
  let minus = first;
  for (let i = 0, n = numbas.length; i < n; i++){
    minus = minus - numbas[i];
  }
  return minus;

};

const sum = function() {
  let count = 0;
  for(let i = 0, n = numbas.length; i < n; i++) {
    count += numbas[i];
  }
  return parseInt(count);
};

const multiply = function() {
  let times = first;
  for (let i = 0, n = numbas.length; i < n; i++){
    times = times * numbas[i];
  }
  return times;
};

const power = function() {
  return Math.pow(first, second)
};

const factorial = function(first) {
  if(first == 0 || first == 1) {
    return 1;
  } else {
    return first * factorial(first-1);
  }
 };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
