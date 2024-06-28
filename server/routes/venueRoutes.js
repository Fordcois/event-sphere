const express = require("express");
const router = express.Router();

const VenueController = require("../controllers/venueController");

router.post("/register", VenueController.Create);
router.post("/styles", VenueController.FilterByStyle);
router.post("/filter", VenueController.FilterByEnquiry)

module.exports = router;