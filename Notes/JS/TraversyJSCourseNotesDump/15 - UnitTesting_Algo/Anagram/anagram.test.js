const anagram = require('./anagram');

describe('Anagram', () => {
	it('should be a function', () => {
		expect(typeof anagram).toEqual('function');
	});
	it('should return boolean', () => {
		expect(typeof anagram('hello', 'ohlle')).toEqual('boolean');
	});
	it('should return true if anagram', () => {
		expect(anagram('arm', 'ram')).toBeTruthy();
		expect(anagram('cinema', 'iceman')).toBeTruthy();
		expect(anagram('god', 'dog')).toBeTruthy();
	});
	it('should return false if not anagram', () => {
		expect(anagram('hello', 'ollefw')).toBeFalsy();
		expect(anagram('world', 'twirl')).toBeFalsy();
		expect(anagram('lost', 'cost')).toBeFalsy();
	});
});
