import React, { Component } from 'react';

class Screen3 extends Component {
    
    componentWillMount() {
        this.props.eventEmitter.emit("updateScreen", {screenIndex: 3});
    }
    
    render() {
        return (
            <div className="screen screen3">
                <h1>SCREEN 3 DATA</h1>
            </div>
            
        );        
    }
}

export default Screen3
// module.exports = Screen3