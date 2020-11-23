import React from 'react';
import{ Redirect} from "react-router-dom";
import ScheduleTable from "./scheduleTable";
import './Schedule.css';

class Schedule extends React.Component {
    constructor(props){
      super(props)
      this.state = {currentUser:localStorage.getItem("user")}
    }
    
    render() {
      if (this.state.currentUser == null || this.state.currentUser === "" || this.state.currentUser === undefined){
        return ( <Redirect to='/home' />);
      }
      return (
        <div>
          <h1>my meetings</h1>
          <ScheduleTable />
        </div>
 
      );
    }  
  }
  
export default Schedule;
