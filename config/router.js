var express = require('express');
var index = require('../routes/index');
//make a router so any further routes to be added will be at one place
var router = { setupRoutes: function(app){
				app.use('/',index);
				}
	};

module.exports = router;

