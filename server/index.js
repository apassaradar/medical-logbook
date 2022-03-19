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
   database: "medical-logbook",
});


app.get("/users", (req, res) => {
  db.query(
    "SELECT userID, fname, lname, email, role.name role FROM users left join role on role.id = users.roleID",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/users", (req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const email = req.body.email;
  const role = req.body.role;

  db.query(
    "INSERT INTO users (fname, lname, email, roleID, password) VALUES (?,?,?,?,123456)",
    [fname, lname, email, role],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  db.query("DELETE FROM users WHERE userID = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.get("/patients", (req, res) => {
  db.query(
    "SELECT dataID, patients.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM patients left join users on users.userID = patients.userID left join ward on ward.id = patients.wardID left join unit on unit.id = patients.unitID",
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
    "INSERT INTO patients (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,1,2,0)",
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

app.put("/patients/:id", (req, res) => {

  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE patients SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=1, userID=2, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


app.get("/opd", (req, res) => {
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

app.post("/opd", (req, res) => {
  
  const unit = req.body.unit;

  db.query(
    "INSERT INTO opd (unitID, courseID, userID, status) VALUES (?,2,3,0)",
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

app.put("/opd/:id", (req, res) => {

  const id = req.params.id;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE opd SET unitID=?, courseID=2, userID=2, updatedAt = ? WHERE dataID = ?",
    [unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


app.get("/conference", (req, res) => {
  db.query(
    "SELECT dataID, conference.userID, con_name, unitID, users.fname userName, unit.name unitName, createdAt, updatedAt, status FROM conference left join users on users.userID = conference.userID left join unit on unit.id = conference.unitID",
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
    "INSERT INTO conference (con_name, unitID, courseID, userID, status) VALUES (?,?,3,1,0)",
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

app.put("/conference/:id", (req, res) => {

  const id = req.params.id;
  const con_name = req.body.con_name;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE conference SET con_name=?, unitID=?, courseID=3, userID=2, updatedAt = ? WHERE dataID = ?",
    [con_name, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


app.get("/emergency", (req, res) => {
  db.query(
    "SELECT dataID, emergency.userID, experience, users.fname userName, createdAt, updatedAt, status FROM emergency left join users on users.userID = emergency.userID",
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
    "INSERT INTO emergency (experience, courseID, userID, status) VALUES (?,4,2,0)",
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

app.put("/emergency/:id", (req, res) => {

  const id = req.params.id;
  const experience = req.body.experience;

  const date = new Date();

  db.query(
    "UPDATE emergency SET experience=?, courseID=4, userID=2, updatedAt = ? WHERE dataID = ?",
    [experience, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


app.get("/observemajor", (req, res) => {
  db.query(
    "SELECT dataID, observemajor.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM observemajor left join users on users.userID = observemajor.userID left join ward on ward.id = observemajor.wardID left join unit on unit.id = observemajor.unitID",
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
    "INSERT INTO observemajor (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,5,2,0)",
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

app.put("/observemajor/:id", (req, res) => {

  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE observemajor SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=5, userID=2, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


app.get("/helpmajor", (req, res) => {
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

app.post("/helpmajor", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO helpmajor (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,6,2,0)",
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

app.put("/helpmajor/:id", (req, res) => {

  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE helpmajor SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=6, userID=1, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.get("/helpobserveminor", (req, res) => {
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

app.post("/helpobserveminor", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO helpobserveminor (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,7,2,0)",
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

app.put("/helpobserveminor/:id", (req, res) => {

  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE helpobserveminor SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=7, userID=2, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.get("/firstaid", (req, res) => {
  db.query(
    "SELECT dataID, firstaid.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM firstaid left join users on users.userID = firstaid.userID left join ward on ward.id = firstaid.wardID left join unit on unit.id = firstaid.unitID",
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
    "INSERT INTO firstaid (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,8,2,0)",
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

app.put("/firstaid/:id", (req, res) => {

  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE firstaid SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=8, userID=2, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.get("/stitches", (req, res) => {
  db.query(
    "SELECT dataID, stitches.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM stitches left join users on users.userID = stitches.userID left join ward on ward.id = stitches.wardID left join unit on unit.id = stitches.unitID",
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
    "INSERT INTO stitches (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,9,2,0)",
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

app.put("/stitches/:id", (req, res) => {

  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE stitches SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=9, userID=2, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.get("/foleycath", (req, res) => {
  db.query(
    "SELECT dataID, foleycath.userID, hn, patient_name, diagnosis, wardID, unitID, users.fname userName, ward.name wardName, unit.name unitName, createdAt, updatedAt, status FROM foleycath left join users on users.userID = foleycath.userID left join ward on ward.id = foleycath.wardID left join unit on unit.id = foleycath.unitID",
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
    "INSERT INTO foleycath (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,10,2,0)",
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

app.put("/foleycath/:id", (req, res) => {

  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE foleycath SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=10, userID=2, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});

app.get("/cvp", (req, res) => {
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

app.post("/cvp", (req, res) => {
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  db.query(
    "INSERT INTO cvp (hn, patient_name, diagnosis, wardID, unitID, courseID, userID, status) VALUES (?,?,?,?,?,11,2,0)",
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

app.put("/cvp/:id", (req, res) => {

  const id = req.params.id;
  const hn = req.body.hn;
  const patient_name = req.body.patient_name;
  const diagnosis = req.body.diagnosis;
  const ward = req.body.ward;
  const unit = req.body.unit;

  const date = new Date();

  db.query(
    "UPDATE cvp SET hn=?, patient_name=?, diagnosis=?, wardID=?, unitID=?, courseID=11, userID=2, updatedAt = ? WHERE dataID = ?",
    [hn, patient_name, diagnosis, ward, unit ,date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


app.get("/resident", (req, res) => {
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

app.post("/resident", (req, res) => {
  
  const subject = req.body.subject;

  db.query(
    "INSERT INTO resident (subject, courseID, userID, status) VALUES (?,12,3,0)",
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

app.put("/resident/:id", (req, res) => {

  const id = req.params.id;
  const subject = req.body.subject;

  const date = new Date();

  db.query(
    "UPDATE resident SET subject=?, courseID=12, userID=2, updatedAt = ? WHERE dataID = ?",
    [subject, date, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Data Inserted");
      }
    }
  );
});


app.listen("3001", () => {
  console.log("Server is running on port 3001");
});
