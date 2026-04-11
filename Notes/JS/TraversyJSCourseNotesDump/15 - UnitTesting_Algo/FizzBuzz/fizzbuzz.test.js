const fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
	it('should be a function', () => {
		expect(typeof fizzBuzz).toEqual('function');
	});
	it('should return the number if not divisible by 3 or 5', () => {
		expect(fizzBuzz(1)).toEqual(1);
		expect(fizzBuzz(13)).toEqual(13);
		expect(fizzBuzz(22)).toEqual(22);
	});
	it('should return the Fizz if divisible by 3', () => {
		expect(fizzBuzz(3)).toEqual('Fizz');
		expect(fizzBuzz(6)).toEqual('Fizz');
		expect(fizzBuzz(9)).toEqual('Fizz');
	});
	it('should return the Buzz if divisible by 5', () => {
		expect(fizzBuzz(5)).toEqual('Buzz');
		expect(fizzBuzz(10)).toEqual('Buzz');
		expect(fizzBuzz(20)).toEqual('Buzz');
	});
	it('should return the FizzBuzz if divisible by 5 and 3', () => {
		expect(fizzBuzz(15)).toEqual('FizzBuzz');
		expect(fizzBuzz(30)).toEqual('FizzBuzz');
		expect(fizzBuzz(45)).toEqual('FizzBuzz');
	});
});
