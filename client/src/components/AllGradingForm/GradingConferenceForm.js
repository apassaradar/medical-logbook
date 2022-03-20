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

export default function GradingConferenceForm({editItem}) {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [con_name, setConName] = useState("");
  const [unit, setUnit] = useState("");

  const [conNameError, setConNameError] = useState(false);
  const [unitError, setUnitError] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
 
    setConName(editItem.con_name)
    setUnit(editItem.unitID)
    console.log(editItem)
  }, [editItem]);

  const updateData = async () => {
    const result = await axios.put(`http://localhost:3001/gradingconference/${editItem.dataID}`, {
      status: 1
    });
    window.location.reload();
  };


  const handleChangeUnit = (e) => {
    setUnit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConNameError(false);
    setUnitError(false);

    if (con_name == "") {
      setConNameError(true);
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
          onChange={(e) => setConName(e.target.value)}
          label="Conference Name"
          variant="outlined"
          color="secondary"
          fullWidth
          disabled
          error={conNameError}
          value={con_name}
        />

        <Grid container>
          <Grid item xs={6}>

            <FormControl className={classes.select}>
              <InputLabel shrink>Unit</InputLabel>
              <Select
                labelId="select"
                id="unit-select"
                displayEmpty
                value={unit}
                disabled
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
          Approve
        </Button>
      </form>
    </Container>
  );
}
