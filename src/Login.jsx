import React from 'react';
import './Login.css';
class Login extends React.Component {
    // constructor(props){
    //   super(props)

    // }   

    componentDidMount(){
      this.props.checkOnRefresh();

    }
    render() {
      return (
        <div id ="sign">
            <input className = "userLogin" type="text" placeholder="Username" name="username" onChange = {(event) => this.props.inputChanged(event)}/>
            {/* <button id = "loginBtn" className = "userLogin" onClick = {() => this.props.signIn() } >Login</button> */}
            <a  href="!#" className = "userLogin" onClick = {() => this.props.signIn() }><span className="glyphicon glyphicon-log-in"></span> Login</a>
        </div>
      );
    }  
  }
export default Login;
