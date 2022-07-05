const express = require('express')
const router = express.Router();

const UserController = require('./../controllers/UserController');
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Log for User - Time: ', Date.now())
  next();
})

router.get('/', UserController.index);

module.exports = router