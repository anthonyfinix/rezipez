const User = require("../../modals/user");
const registrationSchema = require("../../utils/joi_schema/registerUser");
const hashPassword = require("./util/hashPassword");

module.exports = async (user) => {
  const result = registrationSchema.validate(user);
  if (result.error) return { err: result.error.message };
  let isEmailUsed = await User.find({ email: user.email });
  if (isEmailUsed.length) return { err: "email address already registered" };
  let isUsernameUsed = await User.find({ username: user.username });
  if (isUsernameUsed.length) return { err: "username already taken" };
  let hashedPassword = await hashPassword(user.password, 10);
  let newUser = new User({
    name: user.name,
    username: user.username,
    email: user.email,
    password: hashedPassword,
  });
  let response = await newUser.save();
  return { success: `user ${response.name} has been created` };
};
