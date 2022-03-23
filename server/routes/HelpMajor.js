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

app.get("/helpmajor", (req, res) => {
  const userID = req.query.userID;

  db.query(
    "SELECT dataID, helpmajor.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName,ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM helpmajor left join users on users.userID = helpmajor.userID left join ward on ward.id = helpmajor.wardID left join unit on unit.id = helpmajor.unitID WHERE helpmajor.userID = ?",
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

router.post("/helpmajor", (req, res) => {
  const userID = req.body.userID;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO helpmajor (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,6,?,0)",
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

router.delete("/helpmajor/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM helpmajor WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/helpmajor/:id", (req, res) => {
  const userID = req.body.userID;
  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE helpmajor SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=6, userID=?, updatedAt = ? WHERE dataID = ?",
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

router.get("/gradinghelpmajor", (req, res) => {
  db.query(
    "SELECT dataID, helpmajor.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName,ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM helpmajor left join users on users.userID = helpmajor.userID left join ward on ward.id = helpmajor.wardID left join unit on unit.id = helpmajor.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/gradinghelpmajor/:id", (req, res) => {
  const id = req.params.id;

  const status = req.body.status;

  db.query(
    "UPDATE helpmajor SET status=1 WHERE dataID = ?",
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
