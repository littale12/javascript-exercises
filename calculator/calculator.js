function add () {
	return arguments[0] + arguments[1];
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (numList) {
	return numList.reduce((sum, num) => {
		return sum + num;
	}, 0);
}

function multiply (numList) {
	return numList.reduce((total, num) => {
		return total * num;
	}, 1);
}

function power(num, pow) {
	return num ** pow
}

function factorial(n) {
	return (n != 1 && n != 0) ? n * factorial(n-1) : 1;
}
// i may or may not have sought outside help for this last one

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}