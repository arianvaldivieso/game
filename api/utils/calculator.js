var moment = require("moment");

const CreditExpense = require("./../models/creditExpense");

async function getCredits(user) {
  const aux = await CreditExpense.sum("credits", {
    where: {
      user_id: user.id,
    },
  });

  const total = aux != null ? aux : 0;
  var a = moment(user.last_date).tz("America/Caracas");
  var b = moment().tz("America/Caracas");
  return b.diff(a, "minutes") - total;
}

module.exports = {
  getCredits,
};
