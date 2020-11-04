import React from 'react';
import './Login.css';
class Login extends React.Component {
    constructor(props){
      super(props)

    }   
    render() {
      return (
        <div id ="sign">
            <input id = "loginName" className = "userLogin" type="text" placeholder="Username" name="username" onChange = {(event) => this.props.inputChanged(event)}/>
            <button id = "loginBtn" className = "userLogin" onClick = {() => this.props.signIn() } >Login</button>
        </div>
      );
    }  
  }
export default Login;