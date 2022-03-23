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

router.get("/helpobserveminor", (req, res) => {
  const userID = req.query.userID;

  db.query(
    "SELECT dataID, helpobserveminor.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM helpobserveminor left join users on users.userID = helpobserveminor.userID left join ward on ward.id = helpobserveminor.wardID left join unit on unit.id = helpobserveminor.unitID WHERE helpobserveminor.userID = ?",
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

router.post("/helpobserveminor", (req, res) => {
  const userID = req.body.userID;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO helpobserveminor (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,7,?,0)",
    [hn, patient_name, diagnosis, ward, unit, userID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.delete("/helpobserveminor/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query(
    "DELETE FROM helpobserveminor WHERE dataID = ?",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/helpobserveminor/:id", (req, res) => {
  const userID = req.body.userID;
  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE helpobserveminor SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=7, userID=?, updatedAt = ? WHERE dataID = ?",
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

router.get("/gradinghelpobserveminor", (req, res) => {
  db.query(
    "SELECT dataID, helpobserveminor.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM helpobserveminor left join users on users.userID = helpobserveminor.userID left join ward on ward.id = helpobserveminor.wardID left join unit on unit.id = helpobserveminor.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/gradinghelpobserveminor/:id", (req, res) => {
  const id = req.params.id;

  const status = req.body.status;

  db.query(
    "UPDATE helpobserveminor SET status=1 WHERE dataID = ?",
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
