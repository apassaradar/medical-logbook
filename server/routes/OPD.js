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

router.get("/opd", (req, res) => {
  const userID = req.query.userID;

  db.query(
    "SELECT dataID, opd.userID, unitID, users.fname userName, unit.name unitName, createdAt, updatedAt, status FROM opd left join users on users.userID = opd.userID left join unit on unit.id = opd.unitID WHERE opd.userID = ?",
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

router.post("/opd", (req, res) => {
  const userID = req.body.userID;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO opd (unitID, courseID, userID, status) VALUES (?,2,?,0)",
    [unit],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.delete("/opd/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM opd WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

router.put("/opd/:id", (req, res) => {
  const userID = req.body.userID;
  const id = req.params.id;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE opd SET unitID=?, courseID=2, userID=?, updatedAt = ? WHERE dataID = ?",
    [unit, userID, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

router.get("/gradingopd", (req, res) => {
  db.query(
    "SELECT dataID, opd.userID, unitID, users.fname userName, unit.name unitName, createdAt, updatedAt, status FROM opd left join users on users.userID = opd.userID left join unit on unit.id = opd.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

router.put("/gradingopd/:id", (req, res) => {
  const id = req.params.id;

  const status = req.body.status;

  db.query("UPDATE opd SET status=1 WHERE dataID = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Data Inserted");
    }
  });
});

module.exports = router;
