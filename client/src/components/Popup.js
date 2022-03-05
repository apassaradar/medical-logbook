import React from "react";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
  closebtn: {
    backgroundColor: "#d16060",
    color: "#ffffff",
    width: 10,
    height: 30
  },
}));

export default function Popup(props) {
  const classes = useStyles();

  const { title, children, openPopup, setOpenPopup } = props;

  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Typography variant="h6" component="div" style={{ flexGrow: 1, marginRight: 10 }}>
            {title}
          </Typography>
          <Button
            className={classes.closebtn}
            type="button"
            color="danger"
            variant="contained"
            onClick={() => setOpenPopup(false)}
          >
            <CloseIcon />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
