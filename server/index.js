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
    "SELECT dataID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM patients left join ward on ward.id = patients.wardID left join unit on unit.id = patients.unitID",
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
    [hn, patient_name, diagnosis, ward, unit],
    (err, result) => {
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

// app.put("/patients", (req, res) => {
  
//   const id = req.body.id;
//   const hn = req.body.hn;
//   const patient_name = req.body.patient_name;
//   const diagnosis = req.body.diagnosis;
//   const ward = req.body.ward;
//   const unit = req.body.unit;
  
//   db.query(
//     "UPDATE patients SET hn = ?, patient_name = ?, diagnosis = ? ,ward.name wardName = ?, unit.name unitName  = ? left join ward on ward.id = patients.wardID left join unit on unit.id = patients.unitID WHERE id = ?", 
//     [],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

app.get("/helpmajor", (req, res) => {
  db.query(
    "SELECT dataID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM helpmajor left join ward on ward.id = helpmajor.wardID left join unit on unit.id = helpmajor.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/helpmajor", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO helpmajor (hn, patient_name, diagnosis, wardID, unitID, courseID, userID) VALUES (?,?,?,?,?,6,2)",
    [hn, patient_name, diagnosis, ward, unit],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.delete("/helpmajor/:id", (req, res) => {
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

app.get("/firstaid", (req, res) => {
  db.query(
    "SELECT dataID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM firstaid left join ward on ward.id = firstaid.wardID left join unit on unit.id = firstaid.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/firstaid", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO firstaid (hn, patient_name, diagnosis, wardID, unitID, courseID, userID) VALUES (?,?,?,?,?,8,2)",
    [hn, patient_name, diagnosis, ward, unit],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.delete("/firstaid/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM firstaid WHERE dataID = ?", id, (err, result) => {
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
