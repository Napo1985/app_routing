import React from 'react';
import { Redirect } from 'react-router-dom';
import './Card.css';
class Card extends React.Component {    

    constructor(props) {
        super(props);
        this.redirectLink = this.redirectLink.bind(this);
    }

    redirectLink(event)
    {
        console.log(event);
        window.location.href = this.props.path;
    }
    render() {
        let htmlCardElement = [];  
        let htmlCardContainerElement = [];  
        
        htmlCardElement.push(<h2>{this.props.CardData["company"]}</h2>);
        htmlCardElement.push(<div><b>address:</b>{this.props.CardData["address"]}</div>);
        htmlCardElement.push(<div><b>city:</b>{this.props.CardData["city"]}</div>);
        htmlCardElement.push(<div><b>phone:</b>{this.props.CardData["phone"]}</div>);
        htmlCardElement.push(<div><b>email:</b>{this.props.CardData["email"]}</div>);
        
        htmlCardContainerElement.push(<div className="card-text">{htmlCardElement}</div>)
                                                                              
        htmlCardContainerElement.push(<div className="card-btn"> <button onClick = {() => this.redirectLink(this.props.CardData)} >Set appointment</button> </div>);
        return (
            <td className = "card">
                {htmlCardContainerElement}
            </td>
        );
    }
  }
  export default Card;