const pool = require("../db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const UserController = {

    Create: async (req,res) => {
    const { email, firstName, lastName, password } = req.body;
    const upperEmail = email.toUpperCase();
    const id = uuidv4();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    try {
      const NewUser= await pool.query(
        "INSERT INTO users (user_id, email, first_name, last_name, hashed_password) VALUES ($1, $2, $3, $4, $5)",
        [id, upperEmail, firstName, lastName, hashedPassword]
      );
      res.json(NewUser);
    } catch (err) {
      console.log(err);
    }
  },
  Login: async (req,res) => {
    const { email, firstName, lastName, password } = req.body;
  }
    


};


module.exports = UserController;