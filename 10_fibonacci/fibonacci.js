const fibonacci = function (num) {
	if (num < 0) {
		return 'OOPS';
	}
	let numnum = parseInt(num, 10);
	let a = 0,
		b = 1,
		c = numnum;

	for (let i = 2; i <= numnum; i++) {
		c = a + b; // 1  2
		a = b; // 1 1
		b = c; //1 2
	}
	return c;
};

// Do not edit below this line
module.exports = fibonacci;
