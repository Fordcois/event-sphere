const express = require("express");
const router = express.Router();

const VenueController = require("../controllers/venueController");

router.post("/register", VenueController.Create);

module.exports = router;