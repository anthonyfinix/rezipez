const jwt = require("jsonwebtoken");
const User = require("../../modals/user");
const deCrypt = require("./util/deCryptPassword");

module.exports = async (user) => {
  let isUser = await User.find({ username: user.username });
  if (!isUser.length) return {err:"You are not registered"};
  let isPassword = await deCrypt(user.password, isUser[0].password);
  if(!isPassword) return {err:"Password not match"}
  let token = jwt.sign({username:isUser[0].username},process.env.JWT_SECRET);
  let response = {
    name: isUser[0].name,
    username: isUser[0].username,
    email: isUser[0].email,
    token: token
  }
  return response;
};
