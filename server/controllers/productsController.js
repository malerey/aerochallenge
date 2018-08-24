let self = {};
const productsService = require("../services/productsService");

self.getProducts = function (req, res) {
  productsService.getProducts().then(products => {
    return res.json(products);
  })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = self;