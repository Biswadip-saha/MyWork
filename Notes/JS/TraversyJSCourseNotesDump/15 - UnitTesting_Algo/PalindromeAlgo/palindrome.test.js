const palindrome = require('./palindrome');

describe('palindrome', () => {
	it('should be a function', () => {
		expect(typeof palindrome).toEqual('function');
	});
	it('should return a boolean', () => {
		expect(typeof palindrome('hello')).toEqual('boolean');
	});
	it('should return true or false according to the string', () => {
		expect(palindrome('wow')).toBeTruthy();
		expect(palindrome('bye')).toBeFalsy();
		expect(palindrome('kayak')).toBeTruthy();
	});
});
