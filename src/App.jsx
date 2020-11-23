import React from 'react';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Axios from 'axios';

import Company from './components/company/Company';
import Schedule from "./components/schedule/Schedule";
import Home from "./components/home/Home";
import Page404 from "./components/Page404";
import DisplayInfo from './components/DisplayInfo';

import Navbar from "./Navbar"
import Footer from "./Footer";
import './App.css';


class App extends React.Component {

  constructor(props){
    super(props)   
    this.state = {user:"", loginInput:"", signIn:false};

    this.createTimeTable = this.createTimeTable.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.checkOnRefresh = this.checkOnRefresh.bind(this);

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
    this.checkOnRefresh();

  }
  
  checkOnRefresh()
  {
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
        <Navbar inputChanged ={this.inputChanged} checkOnRefresh = {this.checkOnRefresh} signIn={this.signIn} signOut={this.signOut} user={this.state.user} signInProp= {this.state.signIn} />
        <div className="container-fluid text-center background">    
          <div className="row content">
            {/* <div className="col-sm-1 sidenav">
            <div class="well">
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
            </div>
            </div> */}

          <div className="col-sm-12 text-center main"> 
            <Switch>   
              <Redirect exact from='/' to='/home' />
              <Route exact path="/Company/:companyName" user = {this.state.user} render={({ match }) => <Company match={match} />}/>
              <Route path="/schedule"> <Schedule /> </Route>
              <Route path="/home"> <Home user = {this.state.user} /> </Route>
              <Route path="/display/:whatToPass" render={({ match }) => <DisplayInfo match={match} />} />
              {/* <Redirect exact from='/' to='/Home' /> */}
              <Route path="*"> <Page404 /> </Route>    
            </Switch>
          </div>

          {/* <div className="col-sm-1 sidenav ">
             <div class="well">
              <img src="https://i.pinimg.com/originals/d9/c7/5b/d9c75bdc08ceb24ca15a462c3eaa4a7f.gif" alt="ADS" width="20" height="30"></img>
            </div>
            <div class="well">
              <p>ADS</p>
            </div> 
          </div> */}

        </div>
      </div>
      <Footer/>

      </Router>
      



    );
  }  
}

export default App;