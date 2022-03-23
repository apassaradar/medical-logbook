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

router.get("/cvp", (req, res) => {


  const userID = req.query.userID;

  db.query(
    "SELECT dataID, cvp.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, cvp.createdAt, cvp.updatedAt, status FROM cvp left join users on users.userID = cvp.userID left join ward on ward.id = cvp.wardID left join unit on unit.id = cvp.unitID WHERE cvp.userID = ?", [userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/cvp", (req, res) => {

  const userID = req.body.userID;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
    const unit = req.body.unit;
    const date = new Date();

  db.query(
    "INSERT INTO cvp (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, createdAt, updatedAt,status) VALUES (?,?,?,?,?,11,?,?,?,0)",
    [hn, patient_name, diagnosis, ward, unit, userID,date,date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.delete("/cvp/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM cvp WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/cvp/:id", (req, res) => {

  const userID = req.body.userID;
  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE cvp SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=11, userID=?, updatedAt = ? WHERE dataID = ?",
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

router.get("/gradingcvp", (req, res) => {


  db.query(
    "SELECT dataID, cvp.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM cvp left join users on users.userID = cvp.userID left join ward on ward.id = cvp.wardID left join unit on unit.id = cvp.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


router.put("/gradingcvp/:id", (req, res) => {

  const id = req.params.id;
  
  const status = req.body.status;

  db.query(
    "UPDATE cvp SET status=1 WHERE dataID = ?",
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