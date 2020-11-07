import React from 'react';
import './CompanyAppointment.css';

class CompanyAppointment extends React.Component {
    constructor(props){
      super(props)
      this.state = {timeTable:  this.props.timeTable};
      this.setTime = this.setTime.bind(this);
    }
    
    setTime (key){
      this.props.timeTable[key] = true;
      localStorage.setItem(this.props.companyName,JSON.stringify(this.props.timeTable));

      this.setState({ timeTable:  this.props.timeTable });
      
      let currentUser = localStorage.getItem("user");

      if (localStorage.getItem(currentUser) === null) {
        localStorage.setItem(currentUser,JSON.stringify([]));
      }
      let currentUserTable = JSON.parse(localStorage.getItem(currentUser));
      let companyName = this.props.companyName;
      
      currentUserTable.push({companyName, key})
      localStorage.setItem(currentUser,JSON.stringify(currentUserTable));
    }

    render() {
      let htmlTableElement = [];

      for (var key in this.props.timeTable) {
        if (this.props.timeTable[key] === false){
          let currentKey = key ;
          let disabledBtn = localStorage.getItem("user") === "" ||  localStorage.getItem("user") == null ? true : false;
          htmlTableElement.push(<button disabled = {disabledBtn} className="setApBtn" key= {currentKey} onClick = {() => this.setTime(currentKey)} > {currentKey} </button>) ;
        }  
        // console.log(key, this.props.timeTable[key]);
      }
      let counter = htmlTableElement.length;
      return (
          <div>
            {counter > 0 ? <ul >{htmlTableElement}</ul> :<h3>Sorry no available meetings :-(</h3>}
          </div>
      );
    }  
  }

  export default CompanyAppointment;