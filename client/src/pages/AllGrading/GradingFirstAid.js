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
import GradingFirstAidForm from "../../components/AllGradingForm/GradingFirstAidForm"
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
  chipsuccess: {
    backgroundColor: "#85E36B",
    color: '#ffffff'
  },
  chippending: {
    backgroundColor: "#f2ed49",
    color: '#ffffff'
  }
}));

export default function GradingFirstAid() {
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

  const [dataPending, setDataPending] = useState([]);

  const [dataSuccess, setDataSuccess] = useState([]);

  const [editItem, setEditItem] = useState({});

  const getData = async () => {
    const result = await axios.get("http://localhost:3001/gradingfirstaid");
    
    const raw = result.data.reverse();
    setDataPending(raw.filter((x) => x.status == 0));
    setDataSuccess(raw.filter((x) => x.status == 1));
  };

  useEffect(() => {
    getData();
  }, []);

 

  const editData = (item) => {
    setOpenPopup(true)
    setEditItem(item)
    // console.log(item)
  }
  

  return (
    <Container size="sm">
      <Typography
        variant="h5"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        ???????????????????????????????????????????????????????????????????????? First aid in major trauma
      </Typography>

      <Popup title="????????????????????? ???????????????????????????????????????????????????????????????????????? First aid in major trauma"
        openPopup={openPopup} 
        setOpenPopup={setOpenPopup}>
        <GradingFirstAidForm editItem={editItem} />
      </Popup>

      <br />
      <br />
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        ????????????????????????????????????????????????????????????????????????????????????
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Student</TableCell>
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
            {dataPending.map((res) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {res.userName}
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
                  {res.status == 1 ? <Chip label="success" className={classes.chipsuccess} /> : <Chip label="pending" className={classes.chippending} />}
                  
                </TableCell>
                <TableCell align="left">
                  <Button className={classes.editbtn}
                    type="button"
                    variant="contained"
                    endIcon={<EditIcon />}
                    onClick={() => editData(res)}
                  >
                    CHECK
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <br />
      <br />
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        ??????????????????????????????????????????????????????????????????????????????
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Student</TableCell>
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
            {dataSuccess.map((res) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {res.userName}
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
                  {res.status == 1 ? <Chip label="success" className={classes.chipsuccess} /> : <Chip label="pending" className={classes.chippending} />}
                  
                </TableCell>
                <TableCell align="left">
                  <Button className={classes.editbtn}
                    type="button"
                    variant="contained"
                    endIcon={<EditIcon />}
                    onClick={() => editData(res)}
                  >
                    CHECK
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
