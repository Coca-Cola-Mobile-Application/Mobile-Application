const express = require('express');
const { WorkPermitCreate } = require('../../controller/WorkPermitController/WorkPermitController');
const router = express.Router();


// Post request to register a new user
router.post("/create",WorkPermitCreate);



module.exports = router;