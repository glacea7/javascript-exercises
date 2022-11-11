const getTheTitles = function (arr) {
	let newArr = [...arr];
	let output = [];

	for (let i = 0; i < arr.length; i++) {
		output.push(newArr[i].title);
	}
	return output;
};

// Do not edit below this line
module.exports = getTheTitles;
