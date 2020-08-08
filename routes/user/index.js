const router = require("express").Router();
const authenticate = require("./authenticate");
const registerUser = require("./registerUser");

router.post("/login", (req, res) => {
  const {username,password} = req.body;
  authenticate({username,password})
  .then(response=>res.json(response));
});
router.post("/register", (req, res) => {
  const { name, username, password, confirmPassword ,email } = req.body;
  registerUser({name, username, password, confirmPassword ,email}).then((response) => {
    res.json(response);
  });
});

module.exports = router;
