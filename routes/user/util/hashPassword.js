const bcrypt = require("bcrypt");
module.exports = async (password, round) => {
  return bcrypt.hash(password, round).then((hash) => hash);
};
