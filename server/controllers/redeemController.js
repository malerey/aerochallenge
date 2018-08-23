let self = {};
const redeemService = require("../services/redeemService");

self.postRedeem = function (req, res) {
  redeemService.postRedeem().then(data => {
    console.log(res.json(data))
    return res.json(data);
  })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = self;