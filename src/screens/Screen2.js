import React, { Component } from 'react';
import EtherService from '../services/EtherService';
import _ from 'lodash'

class Screen2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          etherPrice: undefined,
          etherPrices: []
        };
    }
    
    
    componentWillMount() {
        this.props.eventEmitter.emit("updateScreen", {screenIndex: 2});
                
        EtherService.getEtherPrice()
        .then((data) => {
            this.setState({etherPrice: data});
            // console.log("GOT DATA");
            // console.log(data);
        });
        
        EtherService.getEtherPrices()
        .then((data) => {
            this.setState({etherPrices: data});
            // console.log("GOT DATA");
            // console.log(data);
        });
    }
    
    render() {
        var TableRows = [];
        _.each(this.state.etherPrices, (etherPrice) => {
            TableRows.push(
                <tbody key={etherPrice.day}>
                    <tr>
                        <td>{etherPrice.day}</td>
                        <td>{etherPrice.price}</td>
                    </tr>
                </tbody>

            );
        });
        
        
        return (
            <div className="screen screen2">
                <h1>SCREEN 2 DATA</h1>
                <h4>{`The current price of Ether is: ${this.state.etherPrice}`}</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {TableRows}
                </table>
            </div>
            
        );        
    }
}

export default Screen2
// module.exports = Screen2