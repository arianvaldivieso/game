"use strict";
var moment = require('moment');
const { sign } = require('./../utils/jwt.js');
const User = require("../models/user.js");


async function login(req, res) {

  let whereQuery = {
    username: req.body.username,
  }

  let user = await User.findAll({
    where: whereQuery,
  });


  if (user.length) {

    /** Update last_date login */

    await User.update({ last_date: moment().tz('America/Caracas').format() }, {
      where: whereQuery
    });

    const token = sign(user[0].username);

    res.status(200).json({
      token: token,
      data: user[0]
    });
  }else{
    res.status(404).json({
      message: 'user not found ',
    });
  }
}

module.exports = {
  login,
};
