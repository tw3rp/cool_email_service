var express = require('express');
var router = express.Router();
var EMAIL = require('../models/emaillist');
var server = require('./server.js');
/* GET home page. */
router.get('*', function(req, res, next) {
  res.sendfile('../public/index.html');
});

router.post('/api/save', function(req,res){
		console.log(req.body); 
		EMAIL.create({email:req.body.email});
		server.sendEmail();	
		res.send("was saved");		

});

module.exports = router;
