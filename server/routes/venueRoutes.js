const express = require("express");
const router = express.Router();

const VenueController = require("../controllers/venueController");

router.post("/register", VenueController.Create);
router.get("/findbyid/:id",VenueController.FindByID)

module.exports = router;