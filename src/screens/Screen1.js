import React, { Component } from 'react';

class Screen1 extends Component {
    
    componentWillMount() {
        this.props.eventEmitter.emit("updateScreen", {screenIndex: 1});
    }
    
    render() {
        return (
            <div className="screen screen1">
                <h1>SCREEN 1 DATA</h1>
            </div>
            
        );        
    }
}


export default Screen1
//module.exports = Screen1