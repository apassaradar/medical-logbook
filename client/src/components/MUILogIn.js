import * as React from 'react';
import Paper from "@material-ui/core/Paper"
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import FormLabel from "@material-ui/core/FormLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core";


const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  
  page: {
    background: "#9e9e9e",
    width: "100%",
    height: "100%",
    
  },
  paper: {
    
    height: '70vh',
    width: '40%',
    justifySelf: 'center',
    alignItems: 'center',
  },
  container: {
    marginTop: 100,
    
  },
  box: {
    padding: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  field: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: '#9e9e9e',
    borderRadius: 1
  },
  select: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  submitbtn: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#00695c",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#fefefe",
      color: "#00695c",
    },
  }
}));


export default function MUILogIn() {

  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper className={classes.paper}> 
        <Container component="main" maxWidth="xs" className={classes.container}>
          <CssBaseline />
          <Box className={classes.box}>
            
            <Typography variant="h4">
              Log in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.field}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                className={classes.field}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                className={classes.submitbtn}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    </ThemeProvider>
  );
}