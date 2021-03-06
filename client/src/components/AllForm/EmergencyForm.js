import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CheckIcon from "@material-ui/icons/Check";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";


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

export default function EmergencyForm({editItem}) {
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
    const result = await axios.put(`http://localhost:3001/emergency/${editItem.dataID}`, {
    
      userID: localStorage.getItem('userID'),
      experience: experience
      
    });
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
      
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
    
      <TextField
          className={classes.field}
          onChange={(e) => setExperience(e.target.value)}
          label="???????????????????????? ?????????????????????????????????????????????????????????????????????"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={experienceError}
          value={experience}
        />


        <Button className={classes.submitbtn}
          type="submit"
          color="success"
          variant="contained"
          endIcon={<CheckIcon />}
          onClick={updateData}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
