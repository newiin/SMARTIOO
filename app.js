const express = require('express');
const app = express();
const path = require('path');
const port = require('./config/server/port');
const { config, engine } = require('express-edge');
const routes = require('./routes');
/**
 * Middleware
 */
config({ cache: process.env.NODE_ENV === 'production' });
app.use(engine);
app.use(express.static(path.join(__dirname, 'public')));
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
