exports.about = (req, res) => {
	console.log('====================================');
	console.log(process.env.NODE_ENV);
	console.log('====================================');
	res.send(process.env.NAME);
};
