const pool = require("../db");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken"); 
const bcrypt = require("bcrypt");

const venueController = {
  Create: async (req, res) => {
    console.log('Backend Venue Controller - Create Reached')
    const id = uuidv4();
    const {venueName,location,contactName,contactEmail,acceptsMeeting,acceptsParty,acceptsDining,acceptsWedding,acceptsNetworking,acceptsConference,maxCapacity,styleFormal,styleCasual,styleModern,styleLuxury,styleTraditional,styleIndustrial,styleSocial,styleLively,styleQuiet,styleProfessional,password} = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
      const newVenue = await pool.query(
        "INSERT INTO venues (venue_id,venue_name,location,contact_name,contact_email,accepts_meeting,accepts_party,accepts_dining,accepts_wedding,accepts_networking,accepts_conference,max_capacity,style_formal,style_modern,style_casual,style_luxury,style_traditional,style_industrial,style_social,style_lively,style_quiet,style_professional,password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22,$23) RETURNING *",
        [id,venueName,location,contactName,contactEmail,acceptsMeeting,acceptsParty,acceptsDining,acceptsWedding,acceptsNetworking,acceptsConference,maxCapacity,styleFormal,styleCasual,styleLuxury,styleTraditional,styleIndustrial,styleSocial,styleLively,styleQuiet,styleProfessional,styleModern,hashedPassword]
      );
      res.json({ message: "Venue created successfully", Venue: newVenue.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  FilterByStyle: async (req, res) => {
    console.log('Backend Venue Controller - FilterByStyle Reached')
    const { style } = req.body; 
    const allowedColumns = ['style_casual','style_formal','style_industrial','style_lively','style_luxury','style_modern','style_professional','style_quiet','style_social','style_traditional'];
    try {
      if (!allowedColumns.includes(style)) 
          {throw new Error('Invalid column name');}
      const result = await pool.query(`SELECT * FROM venues WHERE ${style} = TRUE;`);
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('An error occurred while fetching the enquiry');
    }
  },
  FilterByEnquiry: async (req, res) => {
    console.log('Backend Venue Controller - FilterByEnquiry Reached');
  
    const { event_type, expected_guests, style_casual, style_formal, style_industrial, style_luxury, style_lively, style_modern, style_professional, style_quiet, style_social, style_traditional } = req.body;
    try {
      console.log('event Type:',event_type)
      console.log('Expected Guests:',expected_guests)
      const result = await pool.query(`
        SELECT *
        FROM venues
        WHERE (
          (

            $1 = 'Party' AND accepts_party = TRUE
          )
          AND
          ($2 <= max_capacity)
        );
      `, [event_type, expected_guests]);

      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('An error occurred while fetching the enquiry');
    }
  }
};

module.exports = venueController;

// TODO - Resolve Filter by Enquiry:
// const result = await pool.query(`
//   SELECT *
//   FROM venues
//   WHERE (
//     (
//       ($1 = 'Wedding' AND accepts_wedding = TRUE) OR
//       ($1 = 'Party' AND accepts_party = TRUE) OR
//       ($1 = 'Networking' AND accepts_networking = TRUE) OR
//       ($1 = 'Meeting' AND accepts_meeting = TRUE) OR
//       ($1 = 'Dining' AND accepts_dining = TRUE) OR
//       ($1 = 'Conference' AND accepts_conference = TRUE) OR
//       ($1 = 'Other')
//     )
//     AND
//     ($2 <= max_capacity)
//     AND
//     (
//       ($3 = TRUE AND style_casual = TRUE) OR
//       ($4 = TRUE AND style_formal = TRUE) OR
//       ($5 = TRUE AND style_industrial = TRUE) OR
//       ($6 = TRUE AND style_lively = TRUE) OR
//       ($7 = TRUE AND style_luxury = TRUE) OR
//       ($8 = TRUE AND style_modern = TRUE) OR
//       ($9 = TRUE AND style_professional = TRUE) OR
//       ($10 = TRUE AND style_quiet = TRUE) OR
//       ($11 = TRUE AND style_social = TRUE) OR
//       ($12 = TRUE AND style_traditional = TRUE)
//     )
//   );
// `, [event_type, expected_guests, style_casual, style_formal, style_industrial, style_luxury, style_lively, style_modern, style_professional, style_quiet, style_social, style_traditional]);