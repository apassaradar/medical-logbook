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
import EmergencyForm from "../../components/AllForm/EmergencyForm"
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
    backgroundColor: "#F2E05D",
    color: '#ffffff'
  }
}));

export default function Emergency() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [experience, setExperience] = useState("");

  const [experienceError, setExperienceError] = useState(false);

  const [data, setData] = useState([]);

  const [editItem, setEditItem] = useState({});

  const getData = async () => {
    const result = await axios.get("http://localhost:3001/emergency", {params: {userID: localStorage.getItem('userID')}});
    setData(result.data.reverse());
  };

  useEffect(() => {
    getData();
  }, []);

 
  const addData = async () => {
    const result = await axios.post("http://localhost:3001/emergency", {
      
      userID: localStorage.getItem('userID'),
      experience: experience

    });
    window.location.reload();
  };

  const editData = (item) => {
    setOpenPopup(true)
    setEditItem(item)
    // console.log(item)
  }


  const deleteData = async (id) => {
    const result = await axios.delete(`http://localhost:3001/emergency/${id}`);
    window.location.reload();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceError(false);

    if (experience == "") {
      setExperienceError(true);
    }

    if (experience) {
      console.log(experience);
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
        การอยู่เวรห้องฉุกเฉิน
      </Typography>

      <Popup title="แก้ไข้ข้อมูล การอยู่เวรห้องฉุกเฉิน"
        openPopup={openPopup} 
        setOpenPopup={setOpenPopup}>
        <EmergencyForm editItem={editItem}/>
      </Popup>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
    
      <TextField
          className={classes.field}
          onChange={(e) => setExperience(e.target.value)}
          label="วินิจฉัย หรือประสบการณ์ที่ได้รับ"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={experienceError}
        />


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
              <TableCell align="left">วินิจฉัย หรือประสบการณ์ที่ได้รับ</TableCell>
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
                <TableCell align="left">{res.experience}</TableCell>
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
