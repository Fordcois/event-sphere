const pool = require("../db");
const { v4: uuidv4 } = require("uuid");

const EnquiryController = {

  Create: async (req, res) => {
    const event_id = uuidv4();
    const { userID,eventName,eventType,corporateEvent,seatingArrang,expectedGuests,date,startTime,endTime,flexible,styleFormal,styleCasual,styleModern,styleLuxury,styleTraditional,styleIndustrial,styleSocial,styleLively,styleQuiet,styleProfessional,additionalNotes
    } = req.body;
    try {
        const newEnquiry = await pool.query(
            `INSERT INTO enquiries (
            "Eventid","userid","eventName","eventType","corporateEvent","SeatingArrangment","ExpectedGuests","eventDate","startTime","endTime","flexible","styleCasual","styleModern","styleLuxury","styleTraditional","styleIndustrial","styleSocial","styleLively","styleQuiet","styleProfessional","styleFormal","Notes"
            ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,$14, $15, $16, $17, $18, $19, $20, $21, $22
            ) 
                RETURNING *`,
                [event_id,userID, eventName, eventType,corporateEvent,seatingArrang,expectedGuests,date,startTime,endTime,flexible,styleCasual,styleModern,styleLuxury,styleTraditional,styleIndustrial,styleSocial,styleLively,styleQuiet,styleProfessional,styleFormal,additionalNotes]
        );
        res.json(newEnquiry.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
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
  },
FindAllByUserID: async(req,res) => {
    const { user_id } = req.params;
    console.log('Enquiry - Find By USER ID Reached')

    try {
      const result = await pool.query(
        `SELECT *
         FROM enquiries
         WHERE userid = $1;`, [user_id]
      );

      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query', error);
      res.status(500).send('An error occurred while fetching the enquiry');
    }
}
    


};


module.exports = EnquiryController;