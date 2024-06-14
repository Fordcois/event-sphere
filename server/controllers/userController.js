const pool = require("../db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); 

const UserController = {
  // Create new user
  Create: async (req, res) => {
    const { email, firstName, lastName, password } = req.body;
    const upperEmail = email.toUpperCase();
    const id = uuidv4();
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
      const newUser = await pool.query(
        "INSERT INTO users (user_id, email, first_name, last_name, hashed_password) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        [id, upperEmail, firstName, lastName, hashedPassword]
      );
      res.json({ message: "User created successfully", user: newUser.rows[0] });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // User login
  Login: async (req, res) => {
    const { email, password } = req.body;
    const upperEmail = email.toUpperCase();

    console.log("Email:", upperEmail);
    console.log("Password:", password);

    try {
      const users = await pool.query("SELECT * FROM users WHERE email = $1", [upperEmail]);

      if (!users.rows.length) {
        console.log('User Does not exist')
        return res.status(404).json({ detail: "User does not exist!" });
      }

      const user = users.rows[0];
      const success = await bcrypt.compare(password, user.hashed_password);

      if (success) {
        const token = jwt.sign({ email: user.email }, "secret", { expiresIn: "1h" });
        console.log("Log in success:", user.email);
        res.json({ user: user.user_id, token });
      } else {res.status(401).json({ detail: "Login failed" });}
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = UserController;