var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const pointsController = require('../controllers/pointsController');
const redeemController = require('../controllers/redeemController');

router.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

router.get('/user', userController.getUser);
router.post('/points', pointsController.postPoints);
router.post('/redeem', redeemController.postRedeem);
router.get('/user/history', userController.getHistory);
router.get('/products', productsController.getProducts);

module.exports = router;
