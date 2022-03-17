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
import Popup from "../components/Popup";
import Form from "../components/Form"




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
    backgroundColor: "#85E36B",
    color: '#ffffff'
  }
}));

export default function Manage() {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const [fnameError, setFirstNameError] = useState(false);
  const [lnameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [roleError, setRoleError] = useState(false);

  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setData(result.data.reverse());
  };

  useEffect(() => {
    getData();
  }, []);

 
  const addData = async () => {
    const result = await axios.post("http://localhost:3001/users", {
      fname: fname,
      lname: lname,
      email: email,
      role: role
    });
    window.location.reload();
  };

  // const updateData = async (id) => {
  //   const result = await axios.put(`http://localhost:3001/users/${id}`, {
  //     hn: hn,
  //     patient_name: patient_name,
  //     diagnosis: diagnosis,
  //     ward: ward,
  //     unit: unit,
  //   });
    
  // };


  const deleteData = async (id) => {
    const result = await axios.delete(`http://localhost:3001/users/${id}`);
    window.location.reload();
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    setRoleError(false);

    if (fname == "") {
      setFirstNameError(true);
    }
    if (lname == "") {
      setLastNameError(true);
    }
    if (email == "") {
      setEmailError(true);
    }
    if (role == "") {
      setRoleError(true);
    }
    
    if (fname && lname && email && role) {
      console.log(fname, lname, email, role);
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
        รายชื่อผู้ป่วยที่ได้รับไว้ในความดูแล
      </Typography>

      <Popup title="แก้ไข้ข้อมูล รายชื่อผู้ป่วยที่ได้รับไว้ในความดูแล"
        openPopup={openPopup} 
        setOpenPopup={setOpenPopup}>
        <Form />
      </Popup>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={fnameError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setLastName(e.target.value)}
          label="Last Name"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={lnameError}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          type="email"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={emailError}
        />

        <Grid container>
          <Grid item xs={6}>
            <FormControl className={classes.select}>
              <InputLabel shrink>Role</InputLabel>
              <Select
                labelId="select"
                id="role-select"
                displayEmpty
                value={role}
                required
                error={roleError}
                onChange={handleChangeRole}
              >
                <MenuItem value={""}> </MenuItem>
                <MenuItem value={1}>Admin</MenuItem>
                <MenuItem value={2}>Teacher</MenuItem>
                <MenuItem value={3}>Student</MenuItem>
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
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Role</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((res) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {res.fname}
                </TableCell>
                <TableCell align="left">{res.lname}</TableCell>
                <TableCell align="left">{res.email}</TableCell>
                <TableCell align="left">{res.role}</TableCell>
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
                    onClick={() => deleteData(res.userID)}
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
