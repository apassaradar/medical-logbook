const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const db = mysql.createConnection({
  user: config.username,
  host: config.host,
  password: config.password,
  // database: "medical-logbook",
  database: config.database,
});


router.get("/emergency", (req, res) => {

  const userID = req.query.userID;

  db.query(
    "SELECT dataID, emergency.userID, experience, users.fname userName, createdAt, updatedAt, status FROM emergency left join users on users.userID = emergency.userID WHERE emergency.userID = ?", [userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/emergency", (req, res) => {
  const userID = req.body.userID;
  const experience = req.body.experience;

  db.query(
    "INSERT INTO emergency (experience, courseID, userID, status) VALUES (?,4,?,0)",
    [experience],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.delete("/emergency/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM emergency WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/emergency/:id", (req, res) => {
  const userID = req.body.userID;
  const id = req.params.id;
  const experience = req.body.experience;

  const date = new Date();

  db.query(
    "UPDATE emergency SET experience=?, courseID=4, userID=?, updatedAt = ? WHERE dataID = ?",
    [experience, userID, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.get("/gradingemergency", (req, res) => {
  db.query(
    "SELECT dataID, emergency.userID, experience, users.fname userName, createdAt, updatedAt, status FROM emergency left join users on users.userID = emergency.userID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/gradingemergency/:id", (req, res) => {
  const id = req.params.id;

  const status = req.body.status;

  db.query(
    "UPDATE emergency SET status=1 WHERE dataID = ?",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


module.exports = router;