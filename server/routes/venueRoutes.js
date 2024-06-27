const express = require("express");
const router = express.Router();

const VenueController = require("../controllers/venueController");

router.post("/register", VenueController.Create);
router.post("/styles", VenueController.FilterByStyle);

module.exports = router;