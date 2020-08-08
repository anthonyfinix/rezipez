const router = require("express").Router();
const authenticate = require("./authenticate");
const registerUser = require("./registerUser");

router.get("/login", (req, res) => {
  authenticate();
  res.send("login");
});
router.post("/register", (req, res) => {
  const { name, username, password, confirmPassword ,email } = req.body;
  registerUser({name, username, password, confirmPassword ,email}).then((response) => {
    res.send(response);
  });
});

module.exports = router;
