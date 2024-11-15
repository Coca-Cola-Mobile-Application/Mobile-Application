const express = require('express');
const { GetUserList } = require('../../controller/UserController/UserController');
const router = express.Router();


// Post request to register a new user
router.get("/userList",GetUserList);




module.exports = router;