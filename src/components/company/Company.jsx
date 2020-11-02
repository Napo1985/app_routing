import React from 'react';
import DB from '../database'
class Company extends React.Component {
    constructor(props){
      super(props)
    }
    
    render() {
      console.log(this.props.match.params);
      let x = this.props.match.params.companyName.toLowerCase();
      let y = localStorage.getItem(x);
      let readableJsonData = JSON.parse(y); 
      // let y = DB.getCollection(x);
      console.log(readableJsonData); 
      return (

                <div> dd</div>
      );
    }  
  }

  export default Company;