/* Portfolio, Madisyn Lobodzinski, 301-286-511, 2023-06-02 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
