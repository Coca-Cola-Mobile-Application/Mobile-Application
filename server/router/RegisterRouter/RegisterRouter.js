const express = require('express');
const { RegisterController } = require('../../controller/RegisterController/RegisterController');
const router = express.Router();


// Post request to register a new user
router.post("/register",RegisterController)



module.exports = router;