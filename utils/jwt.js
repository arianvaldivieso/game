var jwt = require("jsonwebtoken");

function sign(payload){
  return jwt.sign({ data: payload }, "123456789");
}

function verify(token){
  try {
    const decoded = jwt.verify(token, '123456789');
    return decoded.data;

  } catch(err) {
    console.log(err)
    return false;
  }
}

module.exports = {
  sign,
  verify
};