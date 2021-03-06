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
    backgroundColor: "#fefefe",
    color: "#00695c",
    "&:hover": {
      backgroundColor: "#00695c",
      color: "#ffffff",
    },
  },
  editbtn: {
    backgroundColor: "#ffffff",
    color: "#548acc",
    marginRight: 10,
    "&:hover": {
      backgroundColor: "#548acc",
      color: "#ffffff",
    },
  },
  delbtn: {
    backgroundColor: "#ffffff",
    color: "#d16060",
    marginRight: 10,
    "&:hover": {
      backgroundColor: "#d16060",
      color: "#ffffff",
    },
  },
}));

export default function ResidentForm({ editItem }) {
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);

  const [subject, setSubject] = useState("");

  const [subjectError, setSubjectError] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    setSubject(editItem.subject);
    console.log(editItem);
  }, [editItem]);

  const updateData = async () => {
    const result = await axios.put(
      `http://localhost:3001/resident/${editItem.dataID}`,
      {
        userID: localStorage.getItem('userID'),
        subject: subject,
      }
    );
    window.location.reload();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubjectError(false);

    if (subject == "") {
      setSubjectError(true);
    }

    if (subject) {
      console.log(subject);
    }
  };

  return (
    <Container size="sm">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={classes.field}
          onChange={(e) => setSubject(e.target.value)}
          label="????????????????????????????????????"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          fullWidth
          required
          error={subjectError}
          value={subject}
        />

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
