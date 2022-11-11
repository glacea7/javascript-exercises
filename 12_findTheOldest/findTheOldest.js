const findTheOldest = function (object) {
	const a = object.reduce((obj, item) => {
		if (!obj.yearOfDeath) {
			obj.yearOfDeath = new Date().getFullYear();
		}
		if (!item.yearOfDeath) {
			item.yearOfDeath = new Date().getFullYear();
		}
		return obj.yearOfDeath - obj.yearOfBirth > item.yearOfDeath - item.yearOfBirth ? obj : item;
	}, object[0]);
	return a;
};

// Do not edit below this line
module.exports = findTheOldest;
