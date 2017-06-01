const equal = require('./')
const success = String.fromCharCode(0x2714)
const failure = String.fromCharCode(0x2716)

var tests = {
	'numbers': {
		expect: true,
		actual: equal(0, 0)
	},
	'strings': {
		expect: false,
		actual: equal('hello', 'world')
	},
	'NaN': {
		expect: true,
		actual: equal(NaN, NaN)
	},
	'arrays': {
		expect: true,
		actual: equal(['foo', 'bar', 'baz'], ['foo', 'bar', 'baz'])
	},
	'objects': {
		expect: true,
		actual: equal({ foo: 'bar' }, { foo: 'bar' })
	},
	'dates': {
		expect: false,
		actual: equal(new Date(0), new Date(1))
	}
}

for (var id in tests) {
	var test = tests[id]
	var char = equal(test.expect, test.actual) ? success : failure
	console.log(char + ' ' + id)
}
