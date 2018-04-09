let express = require('express');
let router = express.Router();
let responseHandler = require('../util/responseHandler').Response;
let User = require('../models/User');

router.get('/getMyProfile', function (req, res, next) {
  User.findById(req.session.user._id).exec(function (err, user) {
    if(!err) {
      var responseObj = {
        name : user.providerData.displayName,
        email: user.email,
        points: user.totalPoints,
        gender: user.providerData.gender,
        image: user.imaPoints geUrl
      }
    }
    res.locals.responseObj = {
      err: err,
      data: responseObj,
      msg: "users profile"
    }
    next();
  })
}, responseHandler)

module.exports = router;