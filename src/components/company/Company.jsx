import React from 'react';
import CompanyAppointment from './CompanyAppointment';
import './Company.css';


class Company extends React.Component {
    // constructor(props){
    //   super(props)
    // }
    
    render() {
      console.log(this.props);
      let localStorageKey = this.props.match.params.companyName.toLowerCase();
      let readableJsonData = JSON.parse(localStorage.getItem(localStorageKey)); 
      console.log(readableJsonData); 

      let htmlRearCardElement = [];
      let Jdata = JSON.parse(localStorage.getItem("jsonFile"));
      for (const i in Jdata)
      {
        if (Jdata[i]["company"].toLowerCase() === localStorageKey)
        {        
          htmlRearCardElement.push(<div className="card-rear-text" key ={Jdata[i]["address"]} ><b>Address:</b>{Jdata[i]["address"]}</div >);
          htmlRearCardElement.push(<div className="card-rear-text" key ={Jdata[i]["city"]}><b>City:</b>{Jdata[i]["city"]}</div >);
          htmlRearCardElement.push(<div className="card-rear-text" key ={Jdata[i]["phone"]}><b>Phone:</b>{Jdata[i]["phone"]}</div >);
          htmlRearCardElement.push(<div className="card-rear-text" key ={Jdata[i]["email"]}><b>Email:</b>{Jdata[i]["email"]}</div >);      
        }
      }
      return (
        <div>

          <div className="row">
            <h1> <b>{localStorageKey.charAt(0).toUpperCase() + localStorageKey.slice(1)}</b></h1>
            <div className="col-sm-4">

              {htmlRearCardElement}
            
            </div>
            <div className="col-sm-8">
              <h2 >Choose available meeting</h2>
              <CompanyAppointment user = {this.props.user} companyName = {localStorageKey} timeTable = {readableJsonData}/>

            </div>
          </div>             
        </div>
      );
    }  
  }

  export default Company;