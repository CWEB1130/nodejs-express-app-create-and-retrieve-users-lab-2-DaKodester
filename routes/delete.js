var express = require('express');
var router = express.Router();

/* GET home page. */
router.delete('/users/:firstName', function(req, res) {
  const requestID = request.params.firstName;

  let user = users.filter(user =>{
      return user.firstName == requestID;
  })[0];

  const index =  users.indexOf(user);

  users.splice(index, 1);

  res.JSON({message: 'User ${requestID} deleted.'});
});


module.exports = router;
