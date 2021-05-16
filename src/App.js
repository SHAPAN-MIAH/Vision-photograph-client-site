import React, { createContext, lazy, Suspense, useState,  } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ServiceAdded from "./components/Admin/ServiceAdded/ServiceAdded";
import AddTeam from "./components/Admin/AddTeam/AddTeam";
import Reviews from "./components/UserComponent/Reviews/Reviews";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute"
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import AddAdmin from "./components/Admin/AddAdmin/AddAdmin";
import NoMatch from "./components/NoMatch/NoMatch";
import Settings from "./components/Admin/Settings/Settings";
import Appointment from "./components/UserComponent/Appointment/Appointment/Appointment";
import LoadingGif from "./images/loading (1).gif";

export const UserContext = createContext();

const MoreTeam = lazy(()=> import("./components/Home/MoreTeam/MoreTeam"));
const MoreTestimonials = lazy(()=> import("./components/Home/MoreTestimonials/MoreTestimonials"));
const ContactUs = lazy(()=> import("./components/ContactUs/ContactUs"));
const Login = lazy(()=> import('./components/Login/Login/Login'));
const Admin = lazy(()=> import("./components/Admin/Admin/Admin"));
const AppointmentLists = lazy(()=> import("./components/UserComponent/AppointmentLists/AppointMentLists"));
const Home = lazy(()=> import("./components/Home/Home/Home"));




function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
              <Switch>
                <Suspense fallback={<div className=" d-flex justify-content-center "><img style={{marginTop: "150px"}} src={LoadingGif} alt="" /></div>}>
                    <Route exact path="/">
                      <Home/>
                    </Route>

                    <Route path="/login">
                      <Login/>
                    </Route>

                    <Route path="/moreTeam">
                      <MoreTeam/>
                    </Route>
                
                    <Route path="/moreTestimonial">
                      <MoreTestimonials/>
                    </Route>

                    <Route path="/contact">
                      <ContactUs/>
                    </Route>

                    <PrivateRoute path="/admin">
                      <Admin/>
                    </PrivateRoute>

                    <PrivateRoute path="/appointmentLists">
                      <AppointmentLists />
                    </PrivateRoute>
                </Suspense>

                <PrivateRoute path="/appointment/:id">
                  <Appointment/>
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
