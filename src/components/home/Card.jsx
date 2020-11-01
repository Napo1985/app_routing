import React from 'react';
import './Card.css';
class Row extends React.Component {    

    constructor(props) {
        super(props);

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
        htmlCardContainerElement.push(<div className="card-btn"><button >Set appointment</button></div>);
        return (
            <td className = "card">
                {htmlCardContainerElement}
            </td>
        );
    }
  }
  export default Row;