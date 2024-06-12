const pool = require("../db");

const EnquiryController = {

    Create: async (req,res) => {
    // const { user_email, title, progress, date } = req.body;
    // Harded Coded for Set-up
    const message = req.body;
    console.log(message)
    const user_email = 'trial@trialmail.com';
    const title = 'Trial Enquiry';
    const progress = 50;
    const date = 'Today';
    const id = 9999999;
    try {
      const newToDo = await pool.query(
        "INSERT INTO todos (id, user_email, title, progress, date) VALUES ($1, $2, $3, $4, $5)",
        [id, user_email, title, progress, date]
      );
      res.json(newToDo);
    } catch (err) {
      console.log(err);
    }
  },
    


};


module.exports = EnquiryController;