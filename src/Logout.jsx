import React from 'react';

import './Logout.css';
class Logout extends React.Component {
    // constructor(props){
    //   super(props)
    // }
    
    render() {
      return (
        <div className = "userLogout">
          <a>Hello {this.props.user}</a> <br/>
          <a onClick = {() => this.props.signOut()  } > (Sign Out)</a>
        </div>
      );
    }  
  }
export default Logout;
