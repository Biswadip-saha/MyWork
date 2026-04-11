function palindrome(str) {
	const rev = str.split('').reverse().join('');
	return str === rev;
}

module.exports = palindrome;
