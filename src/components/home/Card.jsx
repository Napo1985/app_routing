import React from 'react';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import './Card.css';

class Card extends React.Component {    

    constructor(props) {
        super(props);
        this.redirectLink = this.redirectLink.bind(this);
    }

    redirectLink(event)
    {     
        const url = this.props.path +"/" +this.props.CardData["company"].toLowerCase();
        this.props.history.push(url);       
    }
    render() {
        let htmlCardElement = [];  
        let htmlCardContainerElement = [];  
        
        htmlCardElement.push(<h2 key ={this.props.CardData["company"]} >{this.props.CardData["company"]}</h2>);
        htmlCardElement.push(<div key ={this.props.CardData["address"]} ><b>address:</b>{this.props.CardData["address"]}</div >);
        htmlCardElement.push(<div key ={this.props.CardData["city"]}><b>city:</b>{this.props.CardData["city"]}</div >);
        htmlCardElement.push(<div key ={this.props.CardData["phone"]}><b>phone:</b>{this.props.CardData["phone"]}</div >);
        htmlCardElement.push(<div key ={this.props.CardData["email"]}><b>email:</b>{this.props.CardData["email"]}</div >);
        
        htmlCardContainerElement.push(<div key ={this.props.CardData["id"]} className="card-text">{htmlCardElement}</div >)
                                                                              
        htmlCardContainerElement.push(<div  key ={this.props.CardData["id"]-1000} className="card-btn"> <button onClick = {() => this.redirectLink(this.props.CardData)} >Set appointment</button> </div >);
        return (
            <div className = "card">
                {htmlCardContainerElement}
            </div>
        );
    }
  }
  export default withRouter(Card); //set the props to use the route