import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Courses from "./pages/Courses";
import CreatePatients from "./pages/CreatePatients";
import CreateHelpMajor from "./pages/CreateHelpMajor";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Layout from "./components/Layout";
import LogIn from "./pages/Login";

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    success: {
      main: '#2e7d32'
    },
    error: {
      main: '#c62828'
    }

  },

  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/courses">
              <Courses />
            </Route>
            <Route path="/create/patients">
              <CreatePatients />
            </Route>
            <Route path="/create/helpmajor">
              <CreateHelpMajor />
            </Route>
        
            
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
