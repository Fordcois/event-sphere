const express = require("express");
const router = express.Router();

const EnquiryController = require("../controllers/enquiryController");

router.post("/create", EnquiryController.Create);
router.get("/findbyid/:id",EnquiryController.FindByID)
router.get("/enquiriesbyuser/:user_id", EnquiryController.FindAllByUserID);


module.exports = router;