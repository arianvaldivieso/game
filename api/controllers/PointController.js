"use strict";


const { getCredits } = require('./../utils/calculator');
const User = require("../models/user.js");

async function index(req, res) {

  const user = await User.findOne({
    where: {
      username: req.token
    }
  });

  res.status(200).json({
    credits: await getCredits(user)
  });
}

module.exports = {
  index,
};
