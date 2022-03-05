import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Courses from "./pages/Courses";
import CreatePatients from "./pages/CreatePatients";
import CreateFirstAid from "./pages/CreateFirstAid";
import CreateHelpMajor from "./pages/CreateHelpMajor";
import Form from "./components/Form";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import LogIn from "./pages/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },

  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route path="/login">
              <LogIn />
            </Route>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route exact path="/courses">
              <Courses />
            </Route>
            <Route path="/create/patients">
              <CreatePatients />
            </Route>
            <Route path="/create/helpmajor">
              <CreateHelpMajor />
            </Route>
            <Route path="/create/firstaid">
              <CreateFirstAid />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
