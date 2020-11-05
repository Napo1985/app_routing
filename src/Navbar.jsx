import React from 'react';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";

import './Navbar.css';
class Navbar extends React.Component {
    constructor(props){
      super(props)
      this.state = {user:this.props.user};
    }   



    render() {
      return (
          <div>
             <nav class="navbar navbar-inverse">
              <div class="container-fluid">
              <div class="navbar-header">
                <img src="http://getdrawings.com/free-icon/schedule-appointment-icon-73.png" alt="Logo" id="logo-image" />
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                  </div>
                  <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                      <li> <Link to= "/Home" ><b>Home</b></Link> </li>
                      {this.props.signInProp && <li> <Link to= "/schedule" ><b>My schedule</b></Link> </li>}   
                      {!this.props.signInProp ? <li><Login inputChanged={this.props.inputChanged} signIn={this.props.signIn}/></li>:<li><Logout user={this.props.user} signOut={this.props.signOut} /></li>}   
                    </ul>
                  </div>
              </div>
            </nav>
          </div>
      );
    }  
  }
export default Navbar;
