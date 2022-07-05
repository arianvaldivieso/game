"use strict";


const User = require("../models/user");

async function index(req, res) {

  const users = await User.findAll();

  res.status(200).json({
    data: users
  });
}

module.exports = {
  index,
};
