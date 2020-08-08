const User = require("../../modals/user");
const registrationSchema = require("../../utils/joi_schema/registerUser");
const hashPassword = require("./util/hashPassword");

module.exports = async (user) => {
  const result = registrationSchema.validate(user);
  if (result.error) return result.error.message;
  let isEmailUsed = await User.find({ email: user.email });
  if (isEmailUsed.length) return "email address already registered";
  let isUsernameUsed = await User.find({ username: user.username });
  if (isUsernameUsed.length) return "username already taken";
  let hashedPassword = await hashPassword(user.password, 10);
  let newUser = new User({
    name: user.name,
    username: user.username,
    email: user.email,
    hashPassword: hashedPassword,
  });
  let response = await newUser.save();
  return `user ${response.name} has been created`
};
