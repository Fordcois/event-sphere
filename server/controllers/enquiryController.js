const pool = require("../db");
const { v4: uuidv4 } = require("uuid");

const EnquiryController = {

  Create: async (req, res) => {
    const event_id = uuidv4();
    const { userID, 
            eventName, 
            eventType,
            corporateEvent,
            seatingArrang,
            expectedGuests,
            date,
            startTime,
            endTime,
            flexible,
            styleFormal,
            styleCasual,
            styleModern,
            styleLuxury,
            styleTraditional,
            styleIndustrial,
            styleSocial,
            styleLively,
            styleQuiet,
            styleProfessional,
            additionalNotes
    } = req.body;
    console.log(eventName)
    console.log(userID)

    try {
        const newEnquiry = await pool.query(
            `INSERT INTO enquiries (
            "Eventid","userid","eventName","eventType","corporateEvent","SeatingArrangment","ExpectedGuests","eventDate","startTime","endTime","flexible","styleCasual","styleModern","styleLuxury","styleTraditional","styleIndustrial","styleSocial","styleLively","styleQuiet","styleProfessional","styleFormal","Notes"
            ) VALUES (
            $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13,$14, $15, $16, $17, $18, $19, $20, $21, $22
            ) 
                RETURNING *`,
                [event_id,
                    userID, 
                    eventName, 
                    eventType,
                    corporateEvent,
                    seatingArrang,
                    expectedGuests,
                    date,
                    startTime,
                    endTime,
                    flexible,
                    styleCasual,
                    styleModern,
                    styleLuxury,
                    styleTraditional,
                    styleIndustrial,
                    styleSocial,
                    styleLively,
                    styleQuiet,
                    styleProfessional,
                    styleFormal,
                    additionalNotes]
        );

        res.json(newEnquiry.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}
    


};


module.exports = EnquiryController;