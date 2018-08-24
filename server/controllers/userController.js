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
    return res.json(history);
  })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = self;
