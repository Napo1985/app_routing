import React from 'react';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import Axios from 'axios';

import Company from './components/company/Company';
import About from "./components/about/About";
import Home from "./components/home/Home";
import Page404 from "./components/Page404";
import DisplayInfo from './components/DisplayInfo';
import Login from "./Login";
import './App.css';
// import DB from './components/database';

class App extends React.Component {
  constructor(props){
    super(props)   
    this.state = {user:"", loginInput:"", signIn:false};
    this.createTimeTable = this.createTimeTable.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    
  }

  inputChanged(userName,btn)
  {
    btn.disabled = userName !== "" ? false: true;
    this.setState({loginInput:userName});
  }

  signIn(userName){
    
      let x = document.getElementsByClassName("userLogin");
      x[0].style.visibility = "hidden";
      x[1].style.visibility = "hidden";
      let y = document.getElementsByClassName("userLogout");
      y[0].style.visibility = "visible";
      this.setState({user:userName});
  }

  signOut(){
    let x = document.getElementsByClassName("userLogin");
    x[0].style.visibility = "visible";
    x[1].style.visibility = "visible";
    let y = document.getElementsByClassName("userLogout");
    y[0].style.visibility = "hidden";}

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
    // DB.clearDB();
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
  }
  
  render() {
    return (
      <Router>
        <div className="navbar">
          <ul>
            <li className = "active"> <Link to= "/Home" >Home</Link> </li>
            {/* <li> <Link to= "/Company"  >Company</Link> </li> */}
            <li> <Link to= "/About" ></Link> </li>
            {/* <li> <Link to= "/login" >Login</Link> </li> */}
            <div id ="sign">
                <input id = "loginName" className = "userLogin" type="text" placeholder="Username" name="username" onChange = {() => this.inputChanged(document.getElementById("loginName").value,document.getElementById("loginBtn"))}/>
                <button id = "loginBtn" className = "userLogin" onClick = {() => this.signIn(document.getElementById("loginName").value) } >Login</button>
            </div>
            <div className = "userLogout">
              <a>Hello {this.state.user}</a> <br/>
              <a onClick = {() => this.signOut()  } > (Sign Out)</a>
            </div>
            
            
          </ul>
        </div>

        <Switch>   
          {/* <Redirect exact from="/" ></Redirect>   */}
          <Redirect exact from='/' to='/Home' />
          <Route exact path="/Company/:companyName" render={({ match }) => <Company match={match} />}/>
          <Route path="/about"> <About /> </Route>
          <Route path="/home"> <Home /> </Route>
          <Route path="/display/:whatToPass" render={({ match }) => <DisplayInfo match={match} />} />
          <Route exact path="/login"> <Login /></Route>
          <Redirect exact from='/' to='/Home' />
          <Route path="*"> <Page404 /> </Route>
          
        </Switch>
      </Router>
      
    );
  }  
}

export default App;