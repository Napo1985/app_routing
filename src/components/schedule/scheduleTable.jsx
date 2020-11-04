import React from 'react';


class ScheduleTable extends React.Component {
    constructor(props){
      super(props)
      this.state = {currentUser:this.props.currentUser}
    }
    
    render() {
      let htmlTableElement = [];  

      let userTable = JSON.parse( localStorage.getItem(localStorage.getItem("user")));
      userTable.sort(function(a, b) {
        return parseInt(a.key) - parseInt(b.key);
      });
      console.log(userTable);
      const renderData = () => {
        userTable.map((el)=> {
        htmlTableElement.push(<div key = {JSON.stringify(el)} >{el["companyName"]}-{el["key"]}</div>) ;
        return null;
        })
      }
      renderData();
      return (
        <div>{htmlTableElement}</div>
      );
    }
  }  
export default ScheduleTable;
