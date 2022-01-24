import logo from './logo.svg';
import './App.css';
//import Header from './components/header/header.component'
// import Router from './components/header/Routes.component';
import { useState,useEffect } from 'react';
// import Main from './components/Staff/Main.component';
// import SignIn from './components/Auth/Signin.component';
// import Dashboard from "./components/Staff/Dashboard.component";
// import Info from "./components/Staff/Info.component";
// import Students from "./components/Staff/Students.component";
// import Attendance from "./components/Staff/Attendance.component";
// import Navbar from './components/Staff/Navbar.component';
// import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopNavbar from "./components/layout/TopNavbar";
import Landing from "./components/layout/Landing";
import Login from "./components/Auth/Login.component";
//import Register from "./components/Auth/Register.component";
import PrivateRoute from "./routings/PrivateRoute";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import Attendance from "./components/Attendance";
import Show from "./components/Show";
import AdminLogin from "./components/Auth/AdminLogin.component";
import AdminDashboard from "./components/AdminDashboard";
import AdminAdd from "./components/AdminAdd";
import AdminAddFaculty from "./components/AdminAddFaculty";
import setAuthToken from "./utils/setAuthToken";
//import AdminTopNavbar from './components/AdminTopNavbar';
import store from "./store";
import { loadUser } from "./actions/auth";
import { BrowserRouter } from 'react-router-dom';

if (localStorage.token) {
	setAuthToken(localStorage.token);
}


function App() {
  useEffect(() => {
		store.dispatch(loadUser());
	}, []);
    return (
    <div className="App">
      
      <Router>
       <TopNavbar /> 
      <Switch>
      <Route exact path="/" component={Landing}/>
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/attendance" component={Attendance} />
      <PrivateRoute path="/showAttendance" component={Show} />
      {/* <Route exact path="/register" component={Register} /> */}
      <Route exact path="/login" component={Login} />
      {/* <Route exact path="/adminTopNavbar" component={AdminTopNavbar} /> */}
      <Route exact path="/admin" component={AdminLogin} />
      <PrivateRoute exact path='/adminDashboard' component={AdminDashboard} />
       <PrivateRoute exact path='/adminAdd' component={AdminAdd} /> 
       <PrivateRoute exact path='/adminAddFaculty' component={AdminAddFaculty} /> 

      <Route exact path="" component={NotFound} />
      

      </Switch>
        
      </Router>
    </div>
  );
}

export default App;
