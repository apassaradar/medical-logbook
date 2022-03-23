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

router.get("/foleycath", (req, res) => {

  const userID = req.query.userID;

  db.query(
    "SELECT dataID, foleycath.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, foleycath.createdAt, foleycath.updatedAt, status FROM foleycath left join users on users.userID = foleycath.userID left join ward on ward.id = foleycath.wardID left join unit on unit.id = foleycath.unitID WHERE foleycath.userID = ?", [userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/foleycath", (req, res) => {
  
  const userID = req.body.userID;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;
   const date = new Date();

  db.query(
    "INSERT INTO foleycath (hn, patient_name, diagnosis, wardID, unitID, courseID, userID,createdAt, updatedAt,status) VALUES (?,?,?,?,?,10,?,?,?,0)",
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

router.delete("/foleycath/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM foleycath WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/foleycath/:id", (req, res) => {

  const userID = req.body.userID;
  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE foleycath SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=10, userID=?, updatedAt = ? WHERE dataID = ?",
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

router.get("/gradingfoleycath", (req, res) => {

  db.query(
    "SELECT dataID, foleycath.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM foleycath left join users on users.userID = foleycath.userID left join ward on ward.id = foleycath.wardID left join unit on unit.id = foleycath.unitID ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/gradingfoleycath/:id", (req, res) => {

  const id = req.params.id;
  
  const status = req.body.status;
  
  db.query(
    "UPDATE foleycath SET status=1 WHERE dataID = ?",
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