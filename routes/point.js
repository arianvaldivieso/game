const express = require('express')
const router = express.Router();

const myLogger = require('./../middlewares/authMiddleware.js');

const PointController = require('./../controllers/PointController.js');
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Log for Point - Time: ', Date.now())
  next();
})

router.use(myLogger);

router.get('/', PointController.index);

module.exports = router