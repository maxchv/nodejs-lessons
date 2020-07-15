const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    req.session.count = req.session.count || 1;
    res.render('home', { count: req.session.count++ });
});

module.exports = router;