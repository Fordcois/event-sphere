const express = require("express");
const router = express.Router();

const EnquiryController = require("../controllers/enquiryController");

router.post("/create", EnquiryController.Create);


module.exports = router;