const express = require('express')
const {ListUser, AddUser, DeleteUser, LOGIN} = require("../controllers/user-controller");
const router = express.Router();

router.post('/login', LOGIN)
router.get('/users', ListUser)
router.post('/register', AddUser)
router.post('/deleteuser', DeleteUser)

module.exports = router;