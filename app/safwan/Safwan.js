exports.onTap4 = args => {
	const button = args.object
	const page = button.page
	page.frame.goBack()
}