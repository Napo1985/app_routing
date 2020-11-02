import React from 'react';
import DB from '../database.js';
import Axios from 'axios';
import Table from "./Table";


class Home extends React.Component {
    constructor(props){
      super(props)
      this.state = {jsonData: null
      };
    }
    
    // async componentDidMount(){
  //    const fetchData = wait Axios.get();
    //  const data = fetchData.data.value;
    //   this.setState({jsonData : x});
    // }

    async componentDidMount() {
      if ( localStorage.getItem('jsonFile') === null) {
      const fetchData = await Axios.get("./MOCK_DATA20.json"); // change to local storage 
      const data = fetchData.data;
      this.setState({ jsonData: data });
      }
      else
      {
        var jsonObj = JSON.parse(localStorage.getItem('jsonFile'));
        this.setState({ jsonData: jsonObj });
      }
    }
    
    render() {
      // console.log(this.state);
      if (!this.state.jsonData){
        return<h1>Loading...</h1>
      }
      return (
        <div>
          {this.state.jsonData &&  <Table jData={this.state.jsonData} path="/company"/>} 
        </div>
      )};
}

export default Home;