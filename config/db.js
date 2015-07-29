var mongoose = require('mongoose');
var models = require('../models/emaillist');

var conn = mongoose.connection;
var uri='mongodb://localhost/emaillist';

conn.on('error', console.error.bind(console,"mongoose connection error"));

conn.once('open',function(){
		console.log("connected to "+ uri +"database");
});

mongoose.connect(uri);
module.exports = conn;
