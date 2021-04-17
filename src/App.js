import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appointment from "./components/appointment/appointment/Appointment";
import Home from "./components/home/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/appointment">
          <Appointment />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
