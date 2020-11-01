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
      const fetchData = await Axios.get("./MOCK_DATA20.json");
      const data = fetchData.data;
      // console.log(data);
      this.setState({ jsonData: data });
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