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

router.get("/stitches", (req, res) => {

  const userID = req.query.userID;

  db.query(
    "SELECT dataID, stitches.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, stitches.createdAt, stitches.updatedAt, status FROM stitches left join users on users.userID = stitches.userID left join ward on ward.id = stitches.wardID left join unit on unit.id = stitches.unitID WHERE stitches.userID = ?", [userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/stitches", (req, res) => {

  const userID = req.body.userID;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;
  const date = new Date();

  db.query(
    "INSERT INTO stitches (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, createdAt, updatedAt,status) VALUES (?,?,?,?,?,9,?,?,?,0)",
    [hn, patient_name, diagnosis, ward, unit, userID, date, date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.delete("/stitches/:id", (req, res) => {
  const id = req.params.id;

  console.log(id);

  db.query("DELETE FROM stitches WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/stitches/:id", (req, res) => {

  const userID = req.body.userID;
  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;
  const date = new Date();



  db.query(
    "UPDATE stitches SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=9, userID=?, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit, userID, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


router.get("/gradingstitches", (req, res) => {

  db.query(
    "SELECT dataID, stitches.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, stitches.createdAt, stitches.updatedAt, status FROM stitches left join users on users.userID = stitches.userID left join ward on ward.id = stitches.wardID left join unit on unit.id = stitches.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


router.put("/gradingstitches/:id", (req, res) => {

  const id = req.params.id;
 
  const status = req.body.status;

  db.query(
    "UPDATE stitches SET status=1 WHERE dataID = ?",
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