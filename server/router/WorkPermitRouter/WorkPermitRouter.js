const express = require('express');
const { WorkPermitCreate } = require('../../controller/WorkPermitController/WorkPermitController');
const { getWorkPermitListByConditions } = require('../../controller/WorkPermitController/WorkPermitController');
const router = express.Router();


// Post request to register a new user
router.post("/create",WorkPermitCreate);
router.get("/workpermits", getWorkPermitListByConditions);


module.exports = router;