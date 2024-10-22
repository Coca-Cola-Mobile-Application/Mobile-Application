const express = require('express');
const { LoginController } = require('../../controller/LoginController/LoginController');
const authMiddleware = require("../../middleware/authMiddleware")
const router = express.Router();


// Post request to register a new user
router.post("/login",authMiddleware,LoginController)



module.exports = router;