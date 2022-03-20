import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { FaHospitalUser, FaAmbulance, FaHeartbeat } from "react-icons/fa";
import { FaUserInjured, FaBandAid } from "react-icons/fa";
import { GiPersonInBed } from "react-icons/gi";
import { MdVolunteerActivism, MdAirlineSeatIndividualSuite } from "react-icons/md";
import { RiUserSearchFill } from "react-icons/ri";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: "#00695c",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#548acc",
    },
  },
  media: {
    maxWidth: 345,
    backgroundColor: "#E5A944 ",
    color: "#ffffff",
    height: 120,
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    height: 105,
  },
  avatar: {
    backgroundColor: "#EFE3E2",
    width: 100,
    height: 100,
  },
  icon: {
    color: "#6198E7",
    width: 60,
    height: 60,
  }
}));

export default function Grading() {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        วิชาเรียนทั้งหมด
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <PersonAddIcon className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    รายชื่อผู้ป่วยที่ได้รับไว้ในความดูแล
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingpatients"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <FaHospitalUser className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    การเข้าเรียนที่ OPD
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingopd"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <EventSeatIcon className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    การเข้าร่วม Conference ของหน่วย
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingconference"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <FaAmbulance className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    การอยู่เวรห้องฉุกเฉิน
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingemergency"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <RiUserSearchFill className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    รายชื่อผู้ป่วยที่ได้เข้าสังเกตการผ่าตัดใหญ่
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingobservemajor"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <MdVolunteerActivism className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    รายชื่อผู้ป่วยที่ได้เข้าช่วยการผ่าตัดใหญ่
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradinghelpmajor"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <RiUserSearchFill className={classes.icon} />
                    <MdVolunteerActivism className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    รายชื่อผู้ป่วยที่ได้เข้าสังเกตหรือช่วยการผ่าตัดเล็ก
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradinghelpobserveminor"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <FaUserInjured className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    รายชื่อผู้ป่วยที่ได้เห็น First Aid in major trauma
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingfirstaid"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <FaBandAid className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    รายชื่อผู้ป่วยที่ได้เย็บแผล
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingstitches"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <MdAirlineSeatIndividualSuite className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    รายชื่อผู้ป่วยที่ได้ใส่ Foley Cath.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingfoleycath"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <FaHeartbeat className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    รายชื่อผู้ป่วยที่ได้ทำการวัด CVP
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingcvp"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  <Avatar className={classes.avatar}>
                    <AssignmentIndIcon className={classes.icon} />
                  </Avatar>
                </CardMedia>
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h6" component="div">
                    การสอนของ Resident
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  className={classes.btn}
                  component={Link}
                  to="/gradingresident"
                  type="submit"
                  color="success"
                  variant="contained"
                  endIcon={<KeyboardArrowRightIcon />}
                >
                  See Detail
                </Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
