const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const connection = mysql.createConnection({
    host: "server2.bsthun.com",
    port: "6105",
    user: "lab_1jiqml",
    password: "2QLhYXzQjZNr98y2",
    database: "lab_todo02_1j5akgh",
  });

connection.connect(() => {
    console.log("Database is connected");
  });
  
  app.use(bodyParser.json({ type: "application/json" }));
  
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
  
  app.get("/", (req, res) => {
    res.send("Welcome to the website!");
  });
  
  app.post(
    "/register",
    check("password")
      .notEmpty()
      .withMessage("Password cannot be empty")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
      .withMessage(
        "Password must contain at least 1 digit, uppercase, and lowercase letter"
      ),

    async (req, res) => {
      const username = req.body.username;
      const password = req.body.password;
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.json({ errors: errors.array() });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      connection.query(
        `INSERT INTO users (username, password, hashed_password) VALUES (?,?,?)`,
        [username, password, hashedPassword],
        (err, rows) => {
          if (err) {
            res.json({
              success: false,
              data: null,
              error: err.message,
            });
          } else {
            console.log(rows);
            if (rows) {
              res.json({
                success: true,
                data: {
                  message: "Registration successful",
                },
              });
            }
          }
        }
      );
    }
  );

  app.post("/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  
    connection.query(
      `SELECT * FROM users WHERE username = ?`,
      [username],
      async (err, rows) => {
        if (err) {
          res.json({
            success: false,
            data: null,
            error: err.message,
          });
        } else {
          numRows = rows.length;
          if (numRows == 0) {
            res.json({
              success: false,
              message: "This username does not exist",
            });
          }
          const isMatch = await bcrypt.compare(password, rows[0].hashed_password);
          if (!isMatch) {
            res.json({
              success: false,
              message: "Incorrect password",
            });
          } else {
            res.json({
              success: true,
              message: "Login successful",
              user: rows[0],
            });
          }
        }
      }
    );
  });