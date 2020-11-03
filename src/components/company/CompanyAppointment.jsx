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
      
    }

    render() {
      let htmlTableElement = [];

      for (var key in this.props.timeTable) {
        if (this.props.timeTable[key] == false){
          let currentKey = key ;
          htmlTableElement.push(<button  className= "setApBtn" key= {currentKey} onClick = {() => this.setTime(currentKey)} > {currentKey} </button> ) ;
        }  
        // console.log(key, this.props.timeTable[key]);
      }
      return (
        <div> {htmlTableElement}</div>
      );
    }  
  }

  export default CompanyAppointment;