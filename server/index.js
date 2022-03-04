const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "medical-logbook",
});

app.get("/patients", (req, res) => {
  db.query(
    "SELECT dataID, hn, patient_name, diagnosis ,ward.name wardName, unit.name unitName FROM patients left join ward on ward.id = patients.wardID left join unit on unit.id = patients.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/patients", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO patients (hn, patient_name, diagnosis, wardID, unitID, courseID, userID) VALUES (?,?,?,?,?,1,2)",
    [hn, patient_name, diagnosis, ward, unit], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.delete("/patients/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM patients WHERE dataID = ?", id, (err, result) => {
      if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
  });
});





app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
