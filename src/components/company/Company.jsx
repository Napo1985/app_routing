import React from 'react';
import CompanyAppointment from './CompanyAppointment';

class Company extends React.Component {
    constructor(props){
      super(props)
    }
    
    render() {
      console.log(this.props);
      let localStorageKey = this.props.match.params.companyName.toLowerCase();
      let readableJsonData = JSON.parse(localStorage.getItem(localStorageKey)); 
      console.log(readableJsonData); 
      return (
        <div>
          <div>
              <b>{localStorageKey}</b>
          </div>
          <div>
            <CompanyAppointment user = {this.props.user} companyName = {localStorageKey} timeTable = {readableJsonData}/> 
          </div>
        </div>

      );
    }  
  }

  export default Company;