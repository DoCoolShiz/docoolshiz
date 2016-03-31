// Load Modules
var path = require('path');
var express = require('express');
var jade = require('jade');

// Set Variables
var port = process.env.PORT || process.env.NODE_PORT || 3000;
var router = require('./router.js');

// Set up server
var app = express();
app.use(express.static(path.resolve(__dirname + '/../public')));
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Setup Routes
router.setupRoutes(app);

// Start Server
var server = app.listen(port, function(err){
	if (err) {
		throw err;
	}
	console.log('Listening on port ' + port);
});