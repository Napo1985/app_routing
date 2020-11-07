import React from 'react';
// import { Redirect } from 'react-router-dom';
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
        let htmlFrontCardElement = [];  
        let htmlRearCardElement = [];  
        let htmlCardContainerElement = [];

        htmlFrontCardElement.push(<h1 className="card-front-text" key ={this.props.CardData["company"]} >{this.props.CardData["company"]}</h1>);
        htmlRearCardElement.push(<div className="card-rear-text" key ={this.props.CardData["address"]} ><b>Address:</b>{this.props.CardData["address"]}</div >);
        htmlRearCardElement.push(<div className="card-rear-text" key ={this.props.CardData["city"]}><b>City:</b>{this.props.CardData["city"]}</div >);
        htmlRearCardElement.push(<div className="card-rear-text" key ={this.props.CardData["phone"]}><b>Phone:</b>{this.props.CardData["phone"]}</div >);
        htmlRearCardElement.push(<div className="card-rear-text" key ={this.props.CardData["email"]}><b>Email:</b>{this.props.CardData["email"]}</div >);

        htmlCardContainerElement.push(  <div key ={this.props.CardData["id"]} class="flip-card" onClick = {() => this.redirectLink(this.props.CardData)}>
                                            <div class="flip-card-inner">
                                                <div class="flip-card-front ">{htmlFrontCardElement}</div>
                                                <div class="flip-card-back ">{htmlRearCardElement}</div>
                                            </div>
                                        </div>);

        return (
            <div className = "card">
                {htmlCardContainerElement}
            </div>
        );
    }
  }
  export default withRouter(Card); //set the props to use the route