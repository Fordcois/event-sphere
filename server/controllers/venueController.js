const pool = require("../db");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt");

const venueController = {
  // Create new Venue
  Create: async (req, res) => {
    console.log('Backend Venue Controller - Create Reached')
    const id = uuidv4();
    const {venueName,location,contactName,contactEmail,acceptsMeeting,acceptsParty,acceptsDining,acceptsWedding,acceptsNetworking,acceptsConference,maxCapacity,styleFormal,styleCasual,styleModern,styleLuxury,styleTraditional,styleIndustrial,styleSocial,styleLively,styleQuiet,styleProfessional,password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    
    try {
      const newVenue = await pool.query(
        "INSERT INTO venues (id,venue_name,location,contact_name,contact_email,accepts_meeting,accepts_party,accepts_dining,accepts_wedding,accepts_networking,accepts_conference,max_capacity,style_formal,style_modern,style_casual,style_luxury,style_traditional,style_industrial,style_social,style_lively,style_quiet,style_professional,password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22,$23) RETURNING *",
        [id,venueName,location,contactName,contactEmail,acceptsMeeting,acceptsParty,acceptsDining,acceptsWedding,acceptsNetworking,acceptsConference,maxCapacity,styleFormal,styleCasual,styleLuxury,styleTraditional,styleIndustrial,styleSocial,styleLively,styleQuiet,styleProfessional,styleModern,hashedPassword]
      );
      res.json({ message: "Venue created successfully", Venue: newVenue.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  FindByID: async (req, res) => {
    console.log('Backend Venue Controller - FindByID Reached');
    
    const { id } = req.params;
    console.log(id)
    try {
      const result = await pool.query(
        `SELECT enquiries.*, users.first_name, users.last_name, users.email
         FROM enquiries
         INNER JOIN users ON enquiries.userid = users.user_id
         WHERE enquiries."Eventid" = $1;`, [id]
      );
      
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('An error occurred while fetching the enquiry');
    }
  }
};

module.exports = venueController;