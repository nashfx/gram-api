var express = require('express');
var router = express.Router();
const request = require('request');

/* GET comments by media ID */
router.get('/:media_id', function(req, res, next) {
	const url = `https://api.instagram.com/v1/media/${req.params.media_id}/comments?access_token=${process.env.TOKEN}`;
	request.get(url, (err, response, body) => {
        if (err) {
            return next(err);
        }

        res.json(JSON.parse(body));
    });
});

module.exports = router;
