let self = {};
const userService = require("../services/userService");

self.getUser = function (req, res) {
  userService.getUser().then(user_result => {
    return res.json(user_result);
  })
    .catch(function (err) {
      console.log(err);
    });
};

self.getHistory = function (req, res) {
  userService.getHistory().then(history => {
    console.log(res.json(history))
    return res.json(history);
  })
    .catch(function (err) {
      console.log(err);
    });
};



self.postRedeem = function (req, res) {
  userService.postRedeem().then(redeem => {
    console.log(res.json(redeem))
    return res.json(redeem);
  })
    .catch(function (err) {
      console.log(err);
    });
};


module.exports = self;
