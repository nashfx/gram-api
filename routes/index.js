var express = require('express');
var router = express.Router();
const https = require("https");
const _ = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
	//https://www.instagram.com/oauth/authorize/?client_id=fc0bee7330524cb9ba1f5b2bbf2d0a7c&redirect_uri=http://localhost:3300&response_type=token&scope=public_content
	const url = `https://www.instagram.com/oauth/authorize/?client_id=${process.env.CLIENTID}&redirect_uri=${process.env.REDIRECT}&response_type=token&scope=public_content`;
	console.log(url);

	let body = "";

	https.get(url, response => {
  		response.setEncoding("utf8");

  		response.on("data", data => {
    		body += data;
  		});

  		response.on("end", () => {
    		body = JSON.parse(body);
    		console.log(body);
  		});
	});

  	res.render('index', { title: 'Express' });
});

module.exports = router;
