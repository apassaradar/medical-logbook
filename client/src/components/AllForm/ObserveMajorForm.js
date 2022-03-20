import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  submitbtn: {
    backgroundColor: '#fefefe',
    color: '#00695c',
    "&:hover": {
      backgroundColor: "#00695c",
      color: '#ffffff'
    }
  },
  editbtn: {
    backgroundColor: '#ffffff',
    color: '#548acc',
    marginRight: 10,
    "&:hover": {
      backgroundColor: "#548acc",
      color: '#ffffff'
    }
  },
  delbtn: {
    backgroundColor: '#ffffff',
    color: '#d16060',
    marginRight: 10,
    "&:hover": {
      backgroundColor: "#d16060",
      color: '#ffffff'
    }
  }
}));

export default function ObserveMajorForm({editItem}) {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [hn, setHN] = useState("");
  const [patient_name, setPatientName] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [ward, setWard] = useState("");
  const [unit, setUnit] = useState("");

  const [hnError, setHNError] = useState(false);
  const [patientNameError, setPatientNameError] = useState(false);
  const [diagnosisError, setDiagnosisError] = useState(false);
  const [wardError, setWardError] = useState(false);
  const [unitError, setUnitError] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    setHN(editItem.hn)
    setPatientName(editItem.patient_name)
    setDiagnosis(editItem.diagnosis)
    setWard(editItem.wardID)
    setUnit(editItem.unitID)
    console.log(editItem)
  }, [editItem]);

  const updateData = async () => {
    const result = await axios.put(`http://localhost:3001/observemajor/${editItem.dataID}`, {
      
      userID: localStorage.getItem('userID'),
      hn: hn,
      patient_name: patient_name,
      diagnosis: diagnosis,
      ward: ward,
      unit: unit,
    });
    window.location.reload();
  };


  const handleChangeWard = (e) => {
    setWard(e.target.value);
  };

  const handleChangeUnit = (e) => {
    setUnit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHNError(false);
    setPatientNameError(false);
    setDiagnosisError(false);
    setWardError(false);
    setUnitError(false);

    if (hn == "") {
      setHNError(true);
    }
    if (patient_name == "") {
      setPatientNameError(true);
    }
    if (diagnosis == "") {
      setDiagnosisError(true);
    }
    if (ward == "") {
      setWardError(true);
    }
    if (unit == "") {
      setUnitError(true);
    }
    // if (hn && patient_name && diagnosis && ward && unit) {
    //   console.log(hn, patient_name, diagnosis, ward, unit);
    // }
  };

  return (
    <Container size="sm">

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setHN(e.target.value)}
          label="H.N."
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={hnError}
          value={hn}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setPatientName(e.target.value)}
          label="Patient Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={patientNameError}
          value={patient_name}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setDiagnosis(e.target.value)}
          label="Diagnosis"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={diagnosisError}
          value={diagnosis}
        />

        <Grid container>
          <Grid item xs={6}>
            <FormControl className={classes.select}>
              <InputLabel shrink>Ward</InputLabel>
              <Select
                labelId="select"
                id="ward-select"
                displayEmpty
                value={ward}
                required
                error={wardError}
                onChange={handleChangeWard}
              >
                <MenuItem value={""}> </MenuItem>
                <MenuItem value={1}>Ward 1</MenuItem>
                <MenuItem value={2}>Ward 2</MenuItem>
                <MenuItem value={3}>Ward 3</MenuItem>
                <MenuItem value={4}>Ward 4</MenuItem>
                <MenuItem value={5}>Ward 5</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.select}>
              <InputLabel shrink>Unit</InputLabel>
              <Select
                labelId="select"
                id="unit-select"
                displayEmpty
                value={unit}
                required
                error={unitError}
                onChange={handleChangeUnit}
              >
                <MenuItem value={""}> </MenuItem>
                <MenuItem value={1}>Unit 1</MenuItem>
                <MenuItem value={2}>Unit 2</MenuItem>
                <MenuItem value={3}>Unit 3</MenuItem>
                <MenuItem value={4}>Unit 4</MenuItem>
                <MenuItem value={5}>Unit 5</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Button
          className={classes.submitbtn}
          type="submit"
          color="success"
          variant="contained"
          endIcon={<CheckIcon />}
          onClick={updateData}
        >
          Update
        </Button>
      </form>
    </Container>
  );
}
