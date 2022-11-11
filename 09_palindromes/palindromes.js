const palindromes = function (value) {
	let regex = /[^\w]|_/g;
	///[^\w]|_/g

	const lowerCase = value.toLowerCase().replace(regex, '');
	const reverse = lowerCase.split('').reverse().join('');
	return reverse === lowerCase ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
