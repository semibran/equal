const format = require('test-format')
const equal = require('./')
const tests = [
	{
		name: 'numbers',
		expected: false,
		result: equal(3, 42)
	},
	{
		name: 'strings',
		expected: false,
		result: equal('hello', 'world')
	},
	{
		name: 'NaN',
		expected: true,
		result: equal(NaN, NaN)
	},
	{
		name: 'arrays',
		expected: false,
		result: equal(['foo', 'bar'], ['foo', 'bar', 'baz'])
	},
	{
		name: 'objects',
		expected: true,
		result: equal({ foo: [1, 2, 3] }, { foo: [1, 2, 3] })
	},
	{
		name: 'dates',
		expected: false,
		result: equal(new Date(0), new Date(1))
	}
]

console.log(tests.map(format).join('\n'))
