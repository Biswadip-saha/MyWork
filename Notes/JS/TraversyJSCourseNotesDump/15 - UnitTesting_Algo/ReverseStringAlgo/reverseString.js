function reverseString(str) {
	const revArr = str.split('').reverse();
	const revStr = revArr.toString().replace(/,/g, '');
	// const revStr = revArr.join('');
	return revStr;
}

module.exports = reverseString;
