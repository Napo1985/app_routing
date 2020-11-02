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
import './App.css';
import DB from './components/database';

class App extends React.Component {
  constructor(props){
    super(props)
    
  }

  createTimeTable(item)
  {
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
            <li> <Link to= "/About" >About</Link> </li>
          </ul>
        </div>

        <Switch>   
          {/* <Redirect exact from="/" ></Redirect>   */}
          <Redirect exact from='/' to='/Home' />
          <Route exact path="/Company/:companyName" render={({ match }) => <Company match={match} />}/>
          <Route path="/about"> <About /> </Route>
          <Route path="/home"> <Home /> </Route>
          <Route path="/display/:whatToPass" render={({ match }) => <DisplayInfo match={match} />} />
          
          <Redirect exact from='/' to='/Home' />
          <Route path="*"> <Page404 /> </Route>
          
        </Switch>
      </Router>
    );
  }  
}

export default App;