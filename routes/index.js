var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    name: 'DORIS HSIEH',
    id: '207410076',
  });
});
module.exports = router;
