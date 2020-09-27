const { fromObjectRecursive } = require('tns-core-modules/data/observable')

exports.onTap = args => {
	const button = args.object
	const page = button.page
	page.frame.navigate('jonas/jonas-page')
}

exports.onTap2 = args => {
	const button = args.object
	const page = button.page
	page.frame.navigate('antonio/antonio-page')
}

exports.onTap3 = args => {
	const button = args.object
	const page = button.page
	page.frame.navigate('jakob/jakob-page')
}

exports.onTap4 = args => {
	const button = args.object
	const page = button.page
	page.frame.navigate('safwan/Safwan')
}