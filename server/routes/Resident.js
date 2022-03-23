const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

const db = mysql.createConnection({
    user: config.username,
    host: config.host,
    password: config.password,
    // database: "medical-logbook",
    database: config.database,
});

router.get("/resident", (req, res) => {

  const userID = req.query.userID;

  db.query(
    "SELECT dataID, resident.userID, subject, users.fname userName, resident.createdAt, resident.updatedAt, status FROM resident left join users on users.userID = resident.userID WHERE resident.userID = ?", [userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/resident", (req, res) => {
  
  const userID = req.body.userID;
  const subject = req.body.subject;
   const date = new Date();

  db.query(
    "INSERT INTO resident (subject, courseID, userID, createdAt, updatedAt,status) VALUES (?,12,?,?,?,0)",
    [subject, userID,date,date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.delete("/resident/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM resident WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/resident/:id", (req, res) => {

  const userID = req.body.userID;
  const id = req.params.id;
  const subject = req.body.subject;

  const date = new Date();

  db.query(
    "UPDATE resident SET subject=?, courseID=12, userID=?, updatedAt = ? WHERE dataID = ?",
    [subject, userID, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.get("/gradingresident", (req, res) => {

  db.query(
    "SELECT dataID, resident.userID, subject, users.fname userName, createdAt, updatedAt, status FROM resident left join users on users.userID = resident.userID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


router.put("/gradingresident/:id", (req, res) => {

  const id = req.params.id;

  const status = req.body.status;


  db.query(
    "UPDATE resident SET status=1 WHERE dataID = ?",
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