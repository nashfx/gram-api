var express = require('express');
var router = express.Router();
const https = require("https");
const _ = require('lodash');
const request = require('request');

/* GET my recent media */
router.get('/', function(req, res, next) {
	request.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${process.env.TOKEN}`, (err, response, body) => {
        if (err) {
            return next(err);
        }

        res.json(JSON.parse(body));
    });
});

/* GET my user data */
router.get('/user', function(req, res, next) {
	request.get(`https://api.instagram.com/v1/users/self?access_token=${process.env.TOKEN}`, (err, response, body) => {
        if (err) {
            return next(err);
        }

        res.json(JSON.parse(body));
    });
});



module.exports = router;
