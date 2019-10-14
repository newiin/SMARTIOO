const express = require('express');
const app = express();
const path = require('path');
const errorhandler = require('errorhandler');
const notifier = require('node-notifier');
require('dotenv').config();
const port = require('./config/server/port');
const { config, engine } = require('express-edge');
const routes = require('./routes');
/**
 * Middleware
 */
config({ cache: process.env.NODE_ENV === 'production' });
app.use(engine);
app.use(express.static(path.join(__dirname, 'public')));
if (process.env.NODE_ENV === 'development') {
	console.log('====================================');
	console.log('dev');
	console.log('====================================');
	app.use(errorhandler({ log: errorNotification }));
}
const errorNotification = (err, str, req) => {
	const title = `Error in ${req.method} ${req.url}`;
	notifier.notify({
		title: title,
		message: str
	});
};
app.set('case sensitive routing', true);
app.set('views', `${__dirname}/views`);
/**
 *  (routes handlers)
 */

app.use(routes);

app.listen(port, err => {
	if (err) {
		console.log('====================================');
		console.log(err);
		console.log('====================================');
	}
	console.log('====================================');
	console.log('connected ');
	console.log('====================================');
});
