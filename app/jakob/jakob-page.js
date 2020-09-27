exports.onTap3 = args => {
	const button = args.object
	const page = button.page
	page.frame.goBack()
}