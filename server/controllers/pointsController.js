let self = {};
const pointsService = require("../services/pointsService");

self.postPoints = function (req, res) {
  pointsService.postPoints().then(points => {
    console.log(res.json(points))
    return res.json(points);
  })
    .catch(function (err) {
      console.log(err);
    });
};

module.exports = self;