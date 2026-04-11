const getElementByTag = require('./getelementbytagname');

describe('Get Element by Tag Name', () => {
	it('should be a function', () => {
		expect(typeof getElementByTag).toEqual('function');
	});
	it('should return a array', () => {
		expect(Array.isArray(getElementByTag())).toEqual(true);
	});
	it('should return an empty array', () => {
		expect(getElementByTag()).toEqual([]);
	});
	it('should return only the root element if no tagname is passed in', () => {
		const root = document.createElement('div');
		expect(getElementByTag(root)).toEqual([root]);
	});
	it('should return the correct elements', () => {
		const root = document.createElement('div');

		const p1 = document.createElement('p');
		const p2 = document.createElement('p');
		const span = document.createElement('span');
		const ul = document.createElement('ul');

		ul.appendChild(p2);
		span.appendChild(ul);
		root.appendChild(p1);
		root.appendChild(span);

		const result = getElementByTag(root, 'p');

		expect(result).toEqual([p1, p2]);
	});
});
