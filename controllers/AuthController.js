"use strict";

var jwt = require('jsonwebtoken');

const pool = require("./../db.js");



function login(req, res) {


  const token = jwt.sign({ username: req.body.email }, '123456789');

  res.status(200).json({
    token: token
  });
  /**
    pool.query(`select orders.*,User.Name as user from orders inner join User on User.IdUser = orders.IdUser where orders.IsDeleted != 1`,(err,results) => {
        if (err) throw err;
        res.status(200).json({
            status: "success",
            message: 'Order lists',
            data: results
        });
    });

    */
}

module.exports = {
  login,
};
