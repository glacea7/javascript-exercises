const add = function (first, second) {
	return first + second;
};

const subtract = function (first, second) {
	return first - second;
};

const sum = function (values) {
	const sumOfValues = values.reduce((a, b) => {
		return a + b;
	}, 0);
	return sumOfValues;
};

const multiply = function (values) {
	const multiplied = values.reduce((a, b) => {
		return a * b;
	}, 1);
	return multiplied;
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (value) {
	if (value < 0) return -1;
	if (value === 0) return 1;
	let arr = [];
	for (let i = 1; i <= value; i++) {
		arr.push(i);
	}
	const factored = arr.reduce((a, b) => {
		return a * b;
	}, 1);

	return factored;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
