import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
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
    }
  },
  media: {
    maxWidth: 345,
    backgroundColor: "#548acc",
    color: "#ffffff",
    height: 150,
    // alignItems: "center",
    // justifyContent: "center",
  },
  content: {
    height: 80,
  },
  avatar: {
    backgroundColor: "#d16060",
    color: "#ffffff",
    width: 100,
    height: 100,
  },
}));

export default function Courses() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>
            <Card>
              <CardActionArea>
                <CardMedia className={classes.media}>
                  {/* <IconButton>
                    <Fingerprint />
                  </IconButton> */}
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
                  to="/patients"
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
                  {/* <Avatar className={classes.avatar}></Avatar> */}
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
                  to="/opd"
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
                  {/* <Avatar className={classes.avatar}></Avatar> */}
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
                  to="/conference"
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
                  {/* <Avatar className={classes.avatar}></Avatar> */}
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
                  to="/emergency"
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
                  <Avatar className={classes.avatar}></Avatar>
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
                  to="/observemajor"
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
                  <Avatar className={classes.avatar}></Avatar>
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
                  to="/helpmajor"
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
                  <Avatar className={classes.avatar}></Avatar>
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
                  to="/helpobserveminor"
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
                  <Avatar className={classes.avatar}></Avatar>
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
                  to="/firstaid"
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
                  <Avatar className={classes.avatar}></Avatar>
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
                  to="/stitches"
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
                  <Avatar className={classes.avatar}></Avatar>
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
                  to="/foleycath"
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
                  <Avatar className={classes.avatar}></Avatar>
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
                  to="/cvp"
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
                  <Avatar className={classes.avatar}></Avatar>
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
                  to="/resident"
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
