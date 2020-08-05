const router = require('express').Router();
const login = require('./login');

router.get('/login',login)

module.exports = router;