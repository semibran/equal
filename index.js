module.exports = function equal(a, b) {
	if (a === b) {
		return true
	}
	if (typeof a !== typeof b) {
		return false
	}
	if (typeof a === 'number') {
		return a === b || a !== a && b !== b
	}
	if (typeof a === 'function') {
		return a.toString() === b.toString()
	}
	if (Array.isArray(a) && Array.isArray(b)) {
		if (a.length !== b.length) {
			return false
		}
		for (var i = a.length; i--;) {
			if (!equal(a[i], b[i])) {
				return false
			}
		}
		return true
	}
	if (a instanceof Date && b instanceof Date) {
		return +a === +b
	}
	if (typeof a === 'object') {
		for (var key in a) {
			if (!(key in b) || !equal(a[key], b[key])) {
				return false
			}
		}
		for (var key in b) {
			if (!(key in a) || !equal(a[key], b[key])) {
				return false
			}
		}
		return true
	}
}
