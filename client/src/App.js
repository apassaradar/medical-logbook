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
import GradingOPD from "./pages/AllGrading/GradingOPD";
import GradingConference from "./pages/AllGrading/GradingConference";
import GradingEmergency from "./pages/AllGrading/GradingEmergency";
import GradingObserveMajor from "./pages/AllGrading/GradingObserveMajor";
import GradingHelpMajor from "./pages/AllGrading/GradingHelpMajor";
import GradingHelpObserveMinor from "./pages/AllGrading/GradingHelpObserveMinor";
import GradingFirstAid from "./pages/AllGrading/GradingFirstAid";
import GradingStitches from "./pages/AllGrading/GradingStitches";
import GradingFoleyCath from "./pages/AllGrading/GradingFoleyCath";
import GradingCVP from "./pages/AllGrading/GradingCVP";
import GradingResident from "./pages/AllGrading/GradingResident";

import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

import Manage from "./pages/Manage";


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

  const [authState, setAuthState] = useState({
    email: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            email: response.data.email,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({email: "", id: 0, status: false });
  };
  return (
    <ThemeProvider theme={theme}>
       <AuthContext.Provider value={{ authState, setAuthState }}>
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
            <Route path="/gradingpatients">
              <GradingPatients />
            </Route>
            <Route path="/gradingopd">
              <GradingOPD />
            </Route>
            <Route path="/gradingconference">
              <GradingConference />
            </Route>
            <Route path="/gradingemergency">
              <GradingEmergency />
            </Route>
            <Route path="/gradingobservemajor">
              <GradingObserveMajor />
            </Route>
            <Route path="/gradinghelpmajor">
              <GradingHelpMajor />
            </Route>
            <Route path="/gradinghelpobserveminor">
              <GradingHelpObserveMinor />
            </Route>
            <Route path="/gradingfirstaid">
              <GradingFirstAid />
            </Route>
            <Route path="/gradingstitches">
              <GradingStitches />
            </Route>
            <Route path="/gradingfoleycath">
              <GradingFoleyCath />
            </Route>
            <Route path="/gradingcvp">
              <GradingCVP />
            </Route>
            <Route path="/gradingresident">
              <GradingResident />
            </Route>
            <Route path="/manage">
              <Manage />
            </Route>
          </Layout>
        </Switch>
      </Router>
       </AuthContext.Provider>
    </ThemeProvider>
  );
}

export default App;
