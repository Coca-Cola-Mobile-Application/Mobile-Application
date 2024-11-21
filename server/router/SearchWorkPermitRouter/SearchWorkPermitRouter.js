const express = require('express');
const { SearchWorkPermitController } = require('../../controller/SearchWorkPermitController/SearchWorkPermitController');
const router = express.Router();


// Filter created work permits
router.post("/filter",SearchWorkPermitController)


module.exports = router;