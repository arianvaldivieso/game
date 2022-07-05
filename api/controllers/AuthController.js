"use strict";
var moment = require('moment');
const { sign } = require('./../utils/jwt');
const User = require("../models/user");
const CreditExpense = require('./../models/creditExpense');


async function login(req, res) {

  let whereQuery = {
    username: req.body.username,
  }

  let user = await User.findAll({
    where: whereQuery,
  });


  if (user.length) {

    /** Update last_date login */
    const date = moment().tz('America/Caracas').format();
    /**
    await User.update({ last_date: date }, {
      where: whereQuery
    });

     */

    user.last_date = date;

    await CreditExpense.destroy({
      where: {
        user_id: user[0].id
      }
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
