import React, { useState, useEffect } from "react";
import axios from "axios";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Popup from "../../components/Popup";
import Form from "../../components/Form"
import Chip from "@material-ui/core/Chip";

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
  },
  chip: {
    backgroundColor: "#d16060",
    color: '#ffffff'
  }
}));

export default function ObserveMajor() {
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

  const getData = async () => {
    const result = await axios.get("http://localhost:3001/observemajor");
    setData(result.data.reverse());
  };

  useEffect(() => {
    getData();
  }, []);

 
  const addData = async () => {
    const result = await axios.post("http://localhost:3001/observemajor", {
      hn: hn,
      patient_name: patient_name,
      diagnosis: diagnosis,
      ward: ward,
      unit: unit,
    });
    window.location.reload();
  };

  // const updateData = async (id) => {
  //   const result = await axios.put(`http://localhost:3001/observemajor/${id}`, {
  //     hn: hn,
  //     patient_name: patient_name,
  //     diagnosis: diagnosis,
  //     ward: ward,
  //     unit: unit,
  //   });
    
  // };


  const deleteData = async (id) => {
    const result = await axios.delete(`http://localhost:3001/observemajor/${id}`);
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
    if (hn && patient_name && diagnosis && ward && unit) {
      console.log(hn, patient_name, diagnosis, ward, unit);
    }
  };

  return (
    <Container size="sm">
      <Typography
        variant="h5"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        รายชื่อผู้ป่วยที่ได้เข้าสังเกตการผ่าตัดใหญ่
      </Typography>

      <Popup title="แก้ไข้ข้อมูล รายชื่อผู้ป่วยที่ได้เข้าสังเกตการผ่าตัดใหญ่"
        openPopup={openPopup} 
        setOpenPopup={setOpenPopup}>
        <Form />
      </Popup>

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

        <Button className={classes.submitbtn}
          type="submit"
          color="success"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
          onClick={addData}
        >
          Submit
        </Button>
      </form>
      <br />
      <br />
      <br />
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        ข้อมูลที่ทำการเพิ่ม
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>H.N.</TableCell>
              <TableCell align="left">Patient Name</TableCell>
              <TableCell align="right">Ward</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="left">Created At</TableCell>
              <TableCell align="left">Updated At</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((res) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {res.hn}
                </TableCell>
                <TableCell align="left">{res.patient_name}</TableCell>
                <TableCell align="right">{res.wardName}</TableCell>
                <TableCell align="right">{res.unitName}</TableCell>
                <TableCell align="left">
                  <SimpleDateTime 
                    dateFormat="DMY" 
                    dateSeparator="-"  
                    timeSeparator=":" 
                    meridians="1"
                  >
                    {res.createdAt}
                  </SimpleDateTime>
                </TableCell>
                <TableCell align="left">
                  <SimpleDateTime 
                    dateFormat="DMY" 
                    dateSeparator="-"  
                    timeSeparator=":" 
                    meridians="1"
                  >
                    {res.updatedAt}
                  </SimpleDateTime>
                </TableCell>
                <TableCell align="left">
                  <Chip label="success" className={classes.chip} />
                </TableCell>
                <TableCell align="left">
                  <Button className={classes.editbtn}
                    type="button"
                    variant="contained"
                    endIcon={<EditIcon />}
                    onClick={() => setOpenPopup(true)}
                  >
                    Edit
                  </Button>
                  <Button className={classes.delbtn}
                    type="button"
                    variant="contained"
                    endIcon={<DeleteIcon />}
                    onClick={() => deleteData(res.dataID)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
