const router = require('express').Router();
const path = require('path');

router.get('/', function(req, res) {
    var indexPath = path.join(__dirname, '../public/views/index.html');
    res.sendFile(indexPath);
});

module.exports = router;