import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NavBar from "./HomePage/NavBar";
import Login from "./Login/Login";
import Erro from "./Erro"
//This "/" path is not used
const InvalidPage = () => {
  return <Redirect to="/dangnhap" />;
};

class StudentManagement extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={NavBar} />
          <Route path="/" component={Login} />
          {/* <Route exact path="/login" component={Login} /> */}
         <Route path="/dangnhap" component={Login}/>
          {/* <Route path="*" component={Erro}/> */}
        </Switch>
      </Router>
    );
  }
}

export default StudentManagement;
