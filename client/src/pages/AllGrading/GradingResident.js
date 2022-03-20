import React, { useState, useEffect } from "react";
import axios from "axios";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Popup from "../../components/Popup";
import GradingResidentForm from "../../components/AllGradingForm/GradingResidentForm"
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

export default function GradingResident() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [subject, setSubject] = useState("");

  const [subjectError, setSubjectError] = useState(false);

  const [dataPending, setDataPending] = useState([]);

  const [dataSuccess, setDataSuccess] = useState([]);

  const [editItem, setEditItem] = useState({});

  const getData = async () => {
    const result = await axios.get("http://localhost:3001/gradingresident");
    
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
        การสอนของ Resident
      </Typography>

      <Popup title="ตรวจสอบ การสอนของ Resident"
        openPopup={openPopup} 
        setOpenPopup={setOpenPopup}>
        <GradingResidentForm editItem={editItem} />
      </Popup>

      <br />
      <br />
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        ข้อมูลที่ยังไม่ได้รับการตรวจ
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Student</TableCell>
              <TableCell align="left">เรื่องที่สอน</TableCell>
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
                <TableCell align="left">{res.userName}</TableCell>
                <TableCell align="left">{res.subject}</TableCell>
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
        ข้อมูลที่ได้รับการตรวจแล้ว
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Student</TableCell>
              <TableCell align="left">เรื่องที่สอน</TableCell>
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
                <TableCell align="left">{res.userName}</TableCell>
                <TableCell align="left">{res.subject}</TableCell>
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
