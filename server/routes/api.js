const express = require('express')
const {DELETE,ALL,REGISTER, LOGIN} = require("../controllers/user-controller");
const router = express.Router();

router.post('/login', LOGIN)
router.get('/users', ALL)
router.post('/register', REGISTER)
router.post('/deleteuser', DELETE)

module.exports = router;
