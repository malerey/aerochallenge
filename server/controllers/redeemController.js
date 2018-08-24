let self = {};
const redeemService = require("../services/redeemService");

self.postRedeem = function (req, res) {
  const id = req.params.id;
  redeemService.postRedeem(id).then(data => {
    return res.json(data);
  })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = self;