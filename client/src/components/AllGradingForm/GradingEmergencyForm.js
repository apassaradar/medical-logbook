import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";



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
  }
}));

export default function GradingEmergencyForm({editItem}) {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [experience, setExperience] = useState("");

  const [experienceError, setExperienceError] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    
    setExperience(editItem.experience)
    
    console.log(editItem)
  }, [editItem]);

  const updateData = async () => {
    const result = await axios.put(`http://localhost:3001/gradingemergency/${editItem.dataID}`, {
      status: 1
    });
    window.location.reload();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    setExperienceError(false);
    
    if (experience == "") {
      setExperienceError(true);
    }
    
  };

  return (
    <Container size="sm">

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
          disabled
          error={experienceError}
          value={experience}
        />

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
