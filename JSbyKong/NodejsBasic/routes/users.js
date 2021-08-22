var express = require('express');
var router = express.Router();

//ทำส่งข้อความตอบกลับ
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hello User');
});

module.exports = router;
