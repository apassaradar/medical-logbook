import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Courses from "./pages/Courses";
import Patients from "./pages/Patients";
import FirstAid from "./pages/FirstAid";
import HelpMajor from "./pages/HelpMajor";
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
            <Route path="/patients">
              <Patients />
            </Route>
            <Route path="/helpmajor">
              <HelpMajor />
            </Route>
            <Route path="/firstaid">
              <FirstAid />
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
