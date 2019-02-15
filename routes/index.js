var express = require('express');
var router = express.Router();
const https = require("https");
const _ = require('lodash');
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
	request.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${process.env.TOKEN}`, (err, response, body) => {
        if (err) {
            return next(err);
        }

        res.json(JSON.parse(body));
    });
	// get popular photos
	// api.instagram.com/v1/media/popular?access_token=youraccesstoken
}); 

module.exports = router;
