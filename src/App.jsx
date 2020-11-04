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
import Schedule from "./components/schedule/Schedule";
import Home from "./components/home/Home";
import Page404 from "./components/Page404";
import DisplayInfo from './components/DisplayInfo';
import Login from "./Login";
import Logout from "./Logout";
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
    this.setState({user:"",signIn:false}); 
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
        <div className="navbar">
          <ul>
            <li> <Link to= "/Home" >Home</Link> </li>
            {this.state.signIn && <li> <Link to= "/schedule" >My schedule</Link> </li>}   
            {!this.state.signIn ? <Login inputChanged = {this.inputChanged} signIn ={this.signIn} /> :<Logout user = {this.state.user} signOut = {this.signOut} />}   
          </ul>
        </div>

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
      </Router>
      
    );
  }  
}

export default App;