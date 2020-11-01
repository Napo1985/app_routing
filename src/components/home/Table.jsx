import React from 'react';
import Card from "./Card"
class Table extends React.Component {    

    constructor(props) {
        super(props);        
    }
   
    render() {
        console.log(this.props)
        let htmlTableElement = [];  

        const renderData = () => {
            this.props.jData.map((el)=> {

                htmlTableElement.push(<Card key ={"card-"+el.id} CardData= {el}/>) ;
                // return console.log(el);

            })

        }
        renderData();

        return (
            <div>
                <div>
                    
                </div>
                <div>
                    <table>
                        <tbody>
                            {htmlTableElement}
                        </tbody>
                    </table>
                </div>
  
            </div>

        );
    }
  }
export default Table;