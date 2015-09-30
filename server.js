var express = require('express');
var app = express();

var middleware = require('./middleware.js');

app.use(middleware.logger);

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
	console.log('Express server started');
});