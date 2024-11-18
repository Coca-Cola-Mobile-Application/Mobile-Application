const express = require('express');
const { getWorkPermitListByConditions,WorkPermitCreate,getPageTwoPermit,getPageFivePermit, getAllCreatedWorkPermit} = require('../../controller/WorkPermitController/WorkPermitController');
const { getPageOnePermit ,updatePageOnePermit,getPageThreePermit,getPageFourPermit} = require('../../controller/WorkPermitController/WorkPermitController');
const router = express.Router();


// Post request to register a new user
router.post("/create",WorkPermitCreate);
router.get("/workpermits", getWorkPermitListByConditions);
router.get("/pageOnePermit", getPageOnePermit);
router.put("/UpdatePermit", updatePageOnePermit);
router.get("/pageTwoPermit", getPageTwoPermit);
router.get("/pageThreePermit", getPageThreePermit);
router.get("/pageFourPermit", getPageFourPermit);
router.get("/pageFivePermit", getPageFivePermit);

// get all work permit
router.get("/all-workPermit" , getAllCreatedWorkPermit);


module.exports = router;