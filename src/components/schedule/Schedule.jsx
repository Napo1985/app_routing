import React from 'react';
import{ Redirect} from "react-router-dom";
import ScheduleTable from "./scheduleTable";

class Schedule extends React.Component {
    constructor(props){
      super(props)
      this.state = {currentUser:localStorage.getItem("user")}
    }
    
    render() {
      console.log(this.state.currentUser)
      if (this.state.currentUser == null || this.state.currentUser === "" || this.state.currentUser === undefined){
        return ( <Redirect to='/home' />);
      }
      return (
        <ScheduleTable/>
      );
    }  
  }
  
export default Schedule;
