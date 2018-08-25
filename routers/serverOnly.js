const router = require('express').Router();

router.route('/_health').get((req, res) => { res.send(':-)')});

// more custom routes can be defined here

module.exports = router;