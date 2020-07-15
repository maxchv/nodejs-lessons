var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res, next) {
    let queryResult = req.body.queryResult;
    console.log(queryResult);
    res.json({
        "fulfillmentText": queryResult.queryText
    });
});

module.exports = router;