const express = require('express');
const viewsController = require('../controller/viewsController');
const authController = require('../controller/authController');

const router = express.Router();

router.use(viewsController.alerts);

router.get('/', viewsController.getOverview);
router.get('/test', (req, res, next) => {
  res.status(200).render('_displaycard2');
});
/** 
router.get(
  '/Locations/:id',
  authController.isLoggedIn,
  viewsController.getLocation
);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);

//router.get('/my-tours', authController.protect, viewsController.getMyTours);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);
**/
module.exports = router;
