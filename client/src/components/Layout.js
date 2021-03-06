import { IconButton, makeStyles } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AddCircleOutlineOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import { format } from "date-fns";
import MenuIcon from "@material-ui/icons/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: "#f9f9f9",
      width: "100%",
      padding: theme.spacing(3),
    },
    drawer: {
      width: drawerWidth,
      backgroundColor: "#00695c",
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#00695c",
    },
    root: {
      display: "flex",
    },
    active: {
      background: "#f4f4f4",
      color: "#00695c",
    },
    title: {
      padding: theme.spacing(2),
      color: "white",
    },
    appbar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      backgroundColor: "#00695c",
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
      color: "white",
    },
    logout: {
      marginLeft: theme.spacing(2),
      color: "white",
      textDecoration: "none",
    },
    icon: {
      color: "white",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    listicon: {
      color: "white",
    },
    listtext: {
      color: "white",
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

export default function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [menuItems, setMenuItems] = useState([]);

  const [name, setName] = useState("");

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role == 1) {
      setMenuItems([
        // {
        //   text: "Overview",
        //   icon: <SubjectOutlined />,
        //   path: "/",
        // },
        {
          text: "Manage (Admin)",
          icon: <AddCircleOutlineOutlined />,
          path: "/manage",
        },
        {
          text: "Log out",
          icon: <AddCircleOutlineOutlined />,
          path: "/login",
        }
      ]);
    } else if (role == 2) {
      setMenuItems([
        // {
        //   text: "Overview",
        //   icon: <SubjectOutlined />,
        //   path: "/",
        // },
        {
          text: "Courses (Teacher)",
          icon: <AddCircleOutlineOutlined />,
          path: "/grading",
        },
        {
          text: "Log out",
          icon: <AddCircleOutlineOutlined />,
          path: "/login",
        }
      ]);
    } else if (role == 3) {
      setMenuItems([
        // {
        //   text: "Overview",
        //   icon: <SubjectOutlined />,
        //   path: "/",
        // },
        {
          text: "Courses",
          icon: <AddCircleOutlineOutlined />,
          // path: "/courses",
        },
        {
          text: "Patients",
          icon: <AddCircleOutlineOutlined />,
          path: "/patients",
        },
        {
          text: "First Aid",
          icon: <AddCircleOutlineOutlined />,
          path: "/firstaid",
        },
        {
          text: "HelpMajor",
          icon: <AddCircleOutlineOutlined />,
          path: "/helpmajor",
        },
        {
          text: "See all courses",
          icon: <AddCircleOutlineOutlined />,
          path: "/courses",
        },
        {
          text: "Log out",
          icon: <AddCircleOutlineOutlined />,
          path: "/login",
        }
      ]);
    }
  }, []);

  useEffect(() => {
  
    const fname = localStorage.getItem("fname");
    const lname = localStorage.getItem("lname");
    setName(fname + " " + lname);

  }, []);
  


  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <ToolBar>
          <IconButton className={classes.icon}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.date}>
            Today is {format(new Date(), "do MMM Y")}
          </Typography>

          <Typography className={classes.logout}>{name}</Typography>

        </ToolBar>
      </AppBar>

      <Hidden xsDown implementation="css">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          open
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
        >
          <div>
            <Typography variant="h5" className={classes.title}>
              Med Logbook
            </Typography>
          </div>

          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                className={
                  location.pathname == item.path ? classes.active : null
                }
              >
                <ListItemIcon className={classes.listicon}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  className={classes.listtext}
                  primary={item.text}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Hidden>

      <Drawer
        className={classes.drawer}
        variant="temporary"
        open={false}
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Med Logbook
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon className={classes.listicon}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} className={classes.listtext} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}
