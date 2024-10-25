const express = require('express');
const { getWorkPermitListByConditions,WorkPermitCreate,getPageTwoPermit} = require('../../controller/WorkPermitController/WorkPermitController');
const { getPageOnePermit ,updatePageOnePermit,getPageThreePermit} = require('../../controller/WorkPermitController/WorkPermitController');
const router = express.Router();


// Post request to register a new user
router.post("/create",WorkPermitCreate);
router.get("/workpermits", getWorkPermitListByConditions);
router.get("/pageOnePermit", getPageOnePermit);
router.put("/UpdatePermit", updatePageOnePermit);
router.get("/pageTwoPermit", getPageTwoPermit);
router.get("/pageThreePermit", getPageThreePermit);



module.exports = router;