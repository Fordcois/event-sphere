const pool = require("../db");
const { v4: uuidv4 } = require("uuid");

const EnquiryController = {

  // TODO Explore if UUID is built into Postgres? If So can be removed from User Controller
  Create: async (req, res) => {
    const {
        userID, eventName, Function, corporate, StandingArrang,
        GuestsExpected, Date, startTime, endTime, Flexible,
        venueStyle, AdditionalNotes
    } = req.body;

    try {
        const newEnquiry = await pool.query(
            `INSERT INTO enquiries (
                event_id, user_id, event_name, function, corporate,
                standing_arrangement, guests_expected, event_date,
                start_time, end_time, flexible, venue_style, additional_notes
            ) VALUES (
                uuid_generate_v4(), $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12
            ) RETURNING *`,
            [userID, eventName, Function, corporate, StandingArrang, GuestsExpected, Date, startTime, endTime, Flexible, venueStyle, AdditionalNotes]
        );

        res.json(newEnquiry.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}
    


};


module.exports = EnquiryController;