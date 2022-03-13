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
  // database: "medical-logbook",
   database: "medstudentlogbook",
});

app.get("/patients", (req, res) => {
  db.query(
    "SELECT dataID, userID, hn, patient_name, diagnosis, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM patients left join ward on ward.id = patients.wardID left join unit on unit.id = patients.unitID",
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

app.get("/opd", (req, res) => {
  db.query(
    "SELECT dataID, userID, unit.name unitName, createdAt, updatedAt FROM opd left join unit on unit.id = opd.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/opd", (req, res) => {
  
  const unit = req.body.unit;

  db.query(
    "INSERT INTO opd (unitID, courseID, userID) VALUES (?,2,3)",
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

app.delete("/opd/:id", (req, res) => {
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

app.get("/conference", (req, res) => {
  db.query(
    "SELECT dataID, userID, con_name, unit.name unitName, createdAt, updatedAt FROM conference left join unit on unit.id = conference.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/conference", (req, res) => {
  
  const con_name = req.body.con_name;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO conference (con_name, unitID, courseID, userID) VALUES (?,?,3,1)",
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

app.delete("/conference/:id", (req, res) => {
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

app.get("/emergency", (req, res) => {
  db.query(
    "SELECT dataID, userID, experience, createdAt, updatedAt FROM emergency",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/emergency", (req, res) => {
  
  const experience = req.body.experience;

  db.query(
    "INSERT INTO emergency (experience, courseID, userID) VALUES (?,4,2)",
    [experience],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.delete("/emergency/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM emergency WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/observemajor", (req, res) => {
  db.query(
    "SELECT dataID, userID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM observemajor left join ward on ward.id = observemajor.wardID left join unit on unit.id = observemajor.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/observemajor", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO observemajor (hn, patient_name, diagnosis, wardID, unitID, courseID, userID) VALUES (?,?,?,?,?,5,2)",
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

app.delete("/observemajor/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM observemajor WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.get("/helpmajor", (req, res) => {
  db.query(
    "SELECT dataID, userID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM helpmajor left join ward on ward.id = helpmajor.wardID left join unit on unit.id = helpmajor.unitID",
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

app.get("/helpobserveminor", (req, res) => {
  db.query(
    "SELECT dataID, userID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM helpobserveminor left join ward on ward.id = helpobserveminor.wardID left join unit on unit.id = helpobserveminor.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/helpobserveminor", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO helpobserveminor (hn, patient_name, diagnosis, wardID, unitID, courseID, userID) VALUES (?,?,?,?,?,7,2)",
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

app.delete("/helpobserveminor/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM helpobserveminor WHERE dataID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.get("/firstaid", (req, res) => {
  db.query(
    "SELECT dataID, userID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM firstaid left join ward on ward.id = firstaid.wardID left join unit on unit.id = firstaid.unitID",
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


app.get("/stitches", (req, res) => {
  db.query(
    "SELECT dataID, userID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM stitches left join ward on ward.id = stitches.wardID left join unit on unit.id = stitches.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/stitches", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO stitches (hn, patient_name, diagnosis, wardID, unitID, courseID, userID) VALUES (?,?,?,?,?,9,2)",
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

app.delete("/stitches/:id", (req, res) => {
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

app.get("/foleycath", (req, res) => {
  db.query(
    "SELECT dataID, userID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM foleycath left join ward on ward.id = foleycath.wardID left join unit on unit.id = foleycath.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/foleycath", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO foleycath (hn, patient_name, diagnosis, wardID, unitID, courseID, userID) VALUES (?,?,?,?,?,10,2)",
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

app.delete("/foleycath/:id", (req, res) => {
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


app.get("/cvp", (req, res) => {
  db.query(
    "SELECT dataID, userID, hn, patient_name, ward.name wardName, unit.name unitName, createdAt, updatedAt FROM cvp left join ward on ward.id = cvp.wardID left join unit on unit.id = cvp.unitID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/cvp", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO cvp (hn, patient_name, diagnosis, wardID, unitID, courseID, userID) VALUES (?,?,?,?,?,11,2)",
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

app.delete("/cvp/:id", (req, res) => {
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

app.get("/resident", (req, res) => {
  db.query(
    "SELECT dataID, userID, subject, createdAt, updatedAt FROM resident",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/resident", (req, res) => {
  
  const subject = req.body.subject;

  db.query(
    "INSERT INTO resident (subject, courseID, userID) VALUES (?,12,3)",
    [subject],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.delete("/resident/:id", (req, res) => {
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


app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
