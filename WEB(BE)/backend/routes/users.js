var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {

  var sqlToJson = require('../../sqlite_to_json');
  sqlToJson.getUsers();
  console.log("sended to front");
  var data = require('../../users.json');
  res.send(data);
});


module.exports = router;
