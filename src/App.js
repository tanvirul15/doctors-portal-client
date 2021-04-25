import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/appointment/appointment/Appointment";
import AppointmentDashboard from "./components/dashboard/AppointmentDashboard/AppointmentDashboard";
import Dashboard from "./components/dashboard/dashboard/Dashboard";
import PatientDashboard from "./components/dashboard/patientDashboard/PatientDashboard";

import Home from "./components/home/home/Home";
import Login from "./components/Login/Login/Login";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path='/appointment'>
            <Appointment />
          </Route>
          <Route path='/dashboard/appointment'>
            <AppointmentDashboard />
          </Route>
          <Route path='/dashboard/patient'>
            <PatientDashboard />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
