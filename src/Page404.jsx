import React from 'react';
import './Page404.css';


class Page404 extends React.Component {
    constructor(props){
      super(props)
      
    }
    
    render() {
      <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
      return (
        <div className="mainbox">
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet"/>
         
          <div className="err">4</div>
          <div className="err1">0</div>
          {/* <i className="far fa-question-circle fa-spin"></i> */}
          <div className="err2">4</div>
          <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <a href="/">home</a> and try from there.</p></div>
        </div>
      );
    }  
  }
export default Page404;
