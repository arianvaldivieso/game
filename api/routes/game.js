const express = require('express')
const router = express.Router();

const myLogger = require('./../middlewares/authMiddleware.js');

const GameController = require('./../controllers/GameController.js');
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Log for game - Time: ', Date.now())
  next();
})

router.use(myLogger);

router.post('/', GameController.run);

module.exports = router