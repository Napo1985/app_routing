import React from 'react';
import CompanyAppointment from './CompanyAppointment';
import './Company.css';


class Company extends React.Component {
    // constructor(props){
    //   super(props)
    // }
    
    render() {
      let localStorageKey = this.props.match.params.companyName.toLowerCase();
      let readableJsonData = JSON.parse(localStorage.getItem(localStorageKey)); 
      let htmlRearCardElement = [];
      let Jdata = JSON.parse(localStorage.getItem("jsonFile"));
      for (const i in Jdata)
      {
        if (Jdata[i]["company"].toLowerCase() === localStorageKey)
        {        
          htmlRearCardElement.push(<span className="card-rear-text" key ={Jdata[i]["address"]} ><b>Address:</b>{Jdata[i]["address"]}</span >);
          htmlRearCardElement.push(<span className="card-rear-text" key ={Jdata[i]["city"]}><b>City:</b>{Jdata[i]["city"]}</span >);
          htmlRearCardElement.push(<span className="card-rear-text" key ={Jdata[i]["phone"]}><b>Phone:</b>{Jdata[i]["phone"]}</span >);
          htmlRearCardElement.push(<span className="card-rear-text" key ={Jdata[i]["email"]}><b>Email:</b>{Jdata[i]["email"]}</span >);      
        }
      }
      return (
        <div>
          <h1 className="threeD"> <b>{localStorageKey.charAt(0).toUpperCase() + localStorageKey.slice(1)}</b></h1>

          <div className="row">
            <div className="col-sm-4">
            <h2 class="home-title">
                 {htmlRearCardElement}
              </h2>
             
            </div>
            <div className="col-sm-8">
              <h2 >
                <span>Choose available meeting</span>
              </h2>
              <CompanyAppointment user = {this.props.user} companyName = {localStorageKey} timeTable = {readableJsonData}/>

            </div>
          </div>             
        </div>
      );
    }  
  }

  export default Company;