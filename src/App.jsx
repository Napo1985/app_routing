import React from 'react';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { withRouter } from "react-router-dom";
import Axios from 'axios';

import Company from './components/company/Company';
import Schedule from "./components/schedule/Schedule";
import Home from "./components/home/Home";
import Page404 from "./components/Page404";
import DisplayInfo from './components/DisplayInfo';
import Login from "./Login";
import Logout from "./Logout";
import Navbar from "./Navbar"
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props)   
    this.state = {user:"", loginInput:"", signIn:false};

    this.createTimeTable = this.createTimeTable.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(e)
  {
    this.setState({loginInput:e.target.value});
  }

  signIn(){
    if (this.state.loginInput === ""){
      alert("user name is empty")
      return;
    }
    localStorage.setItem('user',this.state.loginInput);
    this.setState({user:this.state.loginInput,signIn:true});
  }

  signOut(){
    localStorage.setItem('user',"");
    this.setState({user:"",signIn:false, loginInput:""})
  }

  createTimeTable(item){
    let result = {}; // Results will go here
    // Loop from current hour 9 to hour 17
    for(let i = 9; i < 17; i++){
      let hour = i+":00"; 
      result[hour] = false;
    }
    return result; 
  }


  async componentDidMount() {
    const fetchData = await Axios.get("./MOCK_DATA20.json");

    const data = fetchData.data;
    var myJSON = JSON.stringify(data);
    localStorage.setItem('jsonFile',myJSON);

    for(const item in data)
    {
      let str = data[item]['company'].toLowerCase();
      if ((localStorage.getItem(str) === null))
      {  
        let y = this.createTimeTable();
        localStorage.setItem(str,JSON.stringify(y));
      }
    }
    const user = localStorage.getItem("user");
    if (user)
    {
      this.setState({user,signIn:true}); 

    }
    else{
      this.setState({user,signIn:false});
    }

  }
  
  render() {
    return (
      <Router>
        
        {/* <nav class="navbar navbar-inverse">
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
                  {this.state.signIn && <li> <Link to= "/schedule" ><b>My schedule</b></Link> </li>}   
                  {!this.state.signIn ? <li><Login inputChanged={this.inputChanged} signIn={this.signIn}/></li>:<li><Logout user={this.state.user} signOut={this.signOut} /></li>}   
                </ul>
              </div>
          </div>
        </nav> */}
        <Navbar inputChanged ={this.inputChanged} signIn={this.signIn} signOut={this.signOut} user={this.state.user} signInProp= {this.state.signIn} />
        <div class="container-fluid text-center background">    
          <div class="row content">
            <div class="col-sm-1 sidenav">
            {/* <div class="well">
              <p>ADS</p>
            </div>
            <div class="well">
              <p>ADS</p>
            </div>
            <div class="well">
              <p>ADS</p>
            </div>
            <div class="well">
              <p>ADS</p>
            </div> */}
            </div>

          <div class="col-sm-10 text-center "> 
            <Switch>   
              {/* <Redirect exact from="/" ></Redirect>   */}
              <Redirect exact from='/' to='/Home' />
              <Route exact path="/Company/:companyName" user = {this.state.user} render={({ match }) => <Company match={match} />}/>
              <Route path="/schedule"> <Schedule /> </Route>
              <Route path="/home"> <Home user = {this.state.user} /> </Route>
              <Route path="/display/:whatToPass" render={({ match }) => <DisplayInfo match={match} />} />
              <Redirect exact from='/' to='/Home' />
              <Route path="*"> <Page404 /> </Route>    
            </Switch>
          </div>

          <div class="col-sm-1 sidenav ">
            {/* <div class="well">
              <img src="https://i.pinimg.com/originals/d9/c7/5b/d9c75bdc08ceb24ca15a462c3eaa4a7f.gif" alt="ADS" width="20" height="30"></img>
            </div>
            <div class="well">
              <p>ADS</p>
            </div> */}
          </div>

        </div>
      </div>
      <footer class="container-fluid text-center footer">
        <p>Footer Text</p>
      </footer>
      </Router>
      



    );
  }  
}

export default App;