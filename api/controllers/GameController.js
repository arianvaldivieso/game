"use strict";

const { getCredits } = require("./../utils/calculator");
const User = require("../models/user");
const CreditExpense = require('./../models/creditExpense');

function calculatePercentage(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

async function calculateRewards(c,user_id) {
  const rewardPercentage = calculatePercentage(1, 10);
  let reward = "";

  if (c == 1 && rewardPercentage <= 2) {
    reward = "pear";
  } else if (c == 1 && rewardPercentage > 2) {
    reward = "apple";
  } else if (c == 2 && rewardPercentage <= 1) {
    reward = "watermelon";
  } else if (c == 2 && rewardPercentage > 1 && rewardPercentage <= 3) {
    reward = "orange";
  } else if (c == 2 && rewardPercentage > 3) {
    reward = "pineapple";
  }

  const expense = await CreditExpense.create({
    credits: c,
    reward: reward,
    user_id: user_id
  });

  return expense;
}

async function run(req, res) {
  const c = req.body.c;

  console.log('Creditos',c)

  if (c < 1 || c > 2) {
    
    return res.status(422).json({
      message: "Solo puedes apostar entre 1 y 2 creditos",
    });
    return true;
  }

  const user = await User.findOne({
    where: {
      username: req.token,
    },
  });

  if (await getCredits(user) >= c) {
    res.status(200).json({
      reward: await calculateRewards(c,user.id),
    });
  } else {
    res.status(422).json({
      message: "No tienes creditos suficientes",
    });
  }
}

module.exports = {
  run,
};
