const express = require('express');
const { getWorkPermitListByConditions,WorkPermitCreate } = require('../../controller/WorkPermitController/WorkPermitController');
const { getPageOnePermit ,updatePageOnePermit} = require('../../controller/WorkPermitController/WorkPermitController');
const router = express.Router();


// Post request to register a new user
router.post("/create",WorkPermitCreate);
router.get("/workpermits", getWorkPermitListByConditions);
router.get("/pageOnePermit", getPageOnePermit);
router.put("/pageOnePermit", updatePageOnePermit);


module.exports = router;