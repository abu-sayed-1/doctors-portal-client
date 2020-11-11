import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AppointmentDataTable from './components/Dashboard/AppointmentDataTable/AppointmentDataTable';
import AddDoctor from './components/AddDoctor/AddDoctor/AddDoctor';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [appointmentDataTable, setAppointmentDataTable] = useState([])
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser, appointmentDataTable, setAppointmentDataTable }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment />
          </Route>
          <Route path="/appointmentDataTable">
            <AppointmentDataTable />
          </Route>
          <Route path="/addDoctor">
            <AddDoctor />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
