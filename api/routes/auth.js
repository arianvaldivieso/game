const express = require('express')
const router = express.Router();

const AuthController = require('./../controllers/AuthController.js');
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Log for Auth - Time: ', Date.now())
  next();
})

router.post('/login', AuthController.login);

module.exports = router