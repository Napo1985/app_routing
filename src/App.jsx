import React from 'react';
import{ 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";


import Team from './components/team/Team';
import About from "./components/about/About";
import Home from "./components/home/Home";
import Page404 from "./components/Page404";

import './App.css';
import DisplayInfo from './components/DisplayInfo';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <Router>
        <div className="navbar">
          <ul>
            <li className = "active"> <Link to= "/Home" >Home</Link> </li>
            <li> <Link to= "/Team"  >Team</Link> </li>
            <li> <Link to= "/About" >About</Link> </li>

          </ul>
        </div>

        <Switch>   
          {/* <Redirect exact from="/" ></Redirect>   */}
          <Redirect exact from='/' to='/Home' />
          <Route path="/Team">  <Team /> </Route>
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