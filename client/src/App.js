import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import Courses from "./pages/Courses";
import Patients from "./pages/AllCourses/Patients";
import OPD from "./pages/AllCourses/OPD";
import Conference from "./pages/AllCourses/Conference";
import Emergency from "./pages/AllCourses/Emergency";
import HelpMajor from "./pages/AllCourses/HelpMajor";
import ObserveMajor from "./pages/AllCourses/ObserveMajor";
import HelpObserveMinor from "./pages/AllCourses/HelpObserveMinor";
import FirstAid from "./pages/AllCourses/FirstAid";
import Stitches from "./pages/AllCourses/Stitches";
import FoleyCath from "./pages/AllCourses/FoleyCath";
import CVP from "./pages/AllCourses/CVP";
import Resident from "./pages/AllCourses/Resident";
import Form from "./components/Form";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import LogIn from "./pages/Login";
import Grading from "./pages/Grading";
import GradingPatients from "./pages/AllGrading/GradingPatients";

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
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
          <Layout>
            <Route exact path="/">
              <Overview />
            </Route>
            <Route exact path="/courses">
              <Courses />
            </Route>
            <Route path="/patients">
              <Patients />
            </Route>
            <Route path="/opd">
              <OPD />
            </Route>
            <Route path="/conference">
              <Conference />
            </Route>
            <Route path="/emergency">
              <Emergency />
            </Route>
            <Route path="/helpmajor">
              <HelpMajor />
            </Route>
            <Route path="/observemajor">
              <ObserveMajor />
            </Route>
            <Route path="/helpobserveminor">
              <HelpObserveMinor />
            </Route>
            <Route path="/firstaid">
              <FirstAid />
            </Route>
            <Route path="/stitches">
              <Stitches />
            </Route>
            <Route path="/foleycath">
              <FoleyCath />
            </Route>
            <Route path="/cvp">
              <CVP />
            </Route>
            <Route path="/resident">
              <Resident />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/grading">
              <Grading />
            </Route>
            <Route path="/grading/patients">
              <GradingPatients />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
