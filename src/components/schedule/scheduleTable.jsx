import React from 'react';
import './scheduleTable.css';




class ScheduleTable extends React.Component {
    constructor(props){
      super(props)
      this.state = {currentUser:this.props.currentUser}
      this.deleteMeeting = this.deleteMeeting.bind(this);
    }
    
    deleteMeeting (company, hour){
      let userTable = JSON.parse(localStorage.getItem(localStorage.getItem("user")));
      
      for( var i = 0; i < userTable.length; i++){ 
        if ( userTable[i]["companyName"] == company && userTable[i]["key"] == hour) { 
          userTable.splice(i, 1); 
        }
      }
      let companyTable = JSON.parse( localStorage.getItem(company));
      companyTable[hour] = false;
      localStorage.setItem(localStorage.getItem("user") ,JSON.stringify(userTable));
      localStorage.setItem(company ,JSON.stringify(companyTable));
      this.setState({currentUser:localStorage.getItem("user")})

    }

    render() {
      let htmlContainerElement = [];  
      let htmlTableElement = [];  

      let userTable = JSON.parse( localStorage.getItem(localStorage.getItem("user")));
      if (userTable == null)
      {
        return null;
      }
      userTable.sort(function(a, b) {
        return parseInt(a.key) - parseInt(b.key);
      });

      const renderData = () => {
        userTable.map((el)=> {
        htmlTableElement.push(<li class="li-meeting" key = {JSON.stringify(el)} >{el["companyName"]} at {el["key"]}
          <button class="li-btn" onClick= {() => this.deleteMeeting(el["companyName"],el["key"])} >delete</button></li>) ;
        return null;
        })
      }
      renderData();
      htmlContainerElement.push(<ul  >{htmlTableElement}</ul>);
      return (
        <div>{htmlTableElement}</div>
      );
    }
  }  
export default ScheduleTable;
