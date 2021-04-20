import React, { createContext, useState } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Login from './components/Login/Login/Login';
import Admin from "./components/Admin/Admin/Admin";
import ServiceAdded from "./components/Admin/ServiceAdded/ServiceAdded";
import AddTeam from "./components/Admin/AddTeam/AddTeam";
import Reviews from "./components/UserComponent/Reviews/Reviews";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute"
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import AppointmentLists from "./components/UserComponent/AppointmentLists/AppointMentLists";
import Team from "./components/Home/Team/Team";
import NoMatch from "./components/NoMatch/NoMatch";
import ContactUs from "./components/ContactUs/ContactUs";
import Settings from "./components/Admin/Settings/Settings";
import Testimonials from "./components/Home/Testimonials/Testimonials";
import Appointment from "./components/UserComponent/Appointment/Appointment/Appointment";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/team">
                  <Team/>
                </Route>
                <Route path="/testimonial">
                  <Testimonials/>
                </Route>
                <Route path="/contact">
                  <ContactUs/>
                </Route>
                <PrivateRoute path="/appointment/:id">
                  <Appointment/>
                </PrivateRoute>
                <PrivateRoute path="/admin">
                  <Admin/>
                </PrivateRoute>
                <PrivateRoute path="/serviceAdded">
                  <ServiceAdded/>
                </PrivateRoute>
                <PrivateRoute path="/addTeam">
                  <AddTeam/>
                </PrivateRoute>
                <PrivateRoute path="/addAdmin">
                  <AddAdmin/>
                </PrivateRoute>
                <PrivateRoute path="/review">
                  <Reviews/>
                </PrivateRoute>
                <PrivateRoute path="/appointment">
                  <Appointment/>
                </PrivateRoute>
                <PrivateRoute path="/admin/appointmentList">
                  <Dashboard/>
                </PrivateRoute>
                <PrivateRoute path="/appointmentLists">
                  <AppointmentLists />
                </PrivateRoute>
                <PrivateRoute path="/setting">
                  <Settings/>
                </PrivateRoute>
                <Route path="*">
                  <NoMatch/>
                </Route>
              </Switch>
          </Router>
          </UserContext.Provider>
    </div>
  );
}
    


export default App;
