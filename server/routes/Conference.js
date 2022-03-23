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

router.get("/conference", (req, res) => {
  const userID = req.query.userID;

  db.query(
    "SELECT dataID, conference.userID, con_name, unitID, users.fname userName, unit.name unitName, createdAt, updatedAt, status FROM conference left join users on users.userID = conference.userID left join unit on unit.id = conference.unitID WHERE conference.userID = ?",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/conference", (req, res) => {
  const userID = req.body.userID;
  const con_name = req.body.con_name;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO conference (con_name, unitID, courseID, userID, status) VALUES (?,?,3,?,0)",
    [con_name, unit],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.delete("/conference/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM conference WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/conference/:id", (req, res) => {
  const userID = req.body.userID;
  const id = req.params.id;
  const con_name = req.body.con_name;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE conference SET con_name=?, unitID=?, courseID=3, userID=?, updatedAt = ? WHERE dataID = ?",
    [con_name, unit, userID, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.get("/gradingconference", (req, res) => {
  db.query(
    "SELECT dataID, conference.userID, con_name, unitID, users.fname userName, unit.name unitName, createdAt, updatedAt, status FROM conference left join users on users.userID = conference.userID left join unit on unit.id = conference.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/gradingconference/:id", (req, res) => {
  const id = req.params.id;

  const status = req.body.status;

  db.query(
    "UPDATE conference SET status=1 WHERE dataID = ?",
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

router.get("/emergency", (req, res) => {
  const userID = req.query.userID;

  db.query(
    "SELECT dataID, emergency.userID, experience, users.fname userName, createdAt, updatedAt, status FROM emergency left join users on users.userID = emergency.userID WHERE emergency.userID = ?",
    [userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


module.exports = router;