import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     screenIndex: 
        // };
    }
    
    
    render() {
        return (
            <div className="app-nav">
				<div className={this.props.screenIndex === 1 ? "nav-item screen1 active-nav" : "nav-item screen1"}
					onClick={(event) => { this.props.eventEmitter.emit("updateScreen", {screenIndex: 1})} }
					>
					<Link to="/screen1">Screen 1</Link>
				</div>
				<div className={this.props.screenIndex === 2 ? "nav-item screen2 active-nav" : "nav-item screen2"}
					onClick={(event) => { this.props.eventEmitter.emit("updateScreen", {screenIndex: 2})} }
					>
					<Link to="/screen2">Screen 2</Link>
				</div>
				<div className={this.props.screenIndex === 3 ? "nav-item screen3 active-nav" : "nav-item screen3"}
					onClick={(event) => { this.props.eventEmitter.emit("updateScreen", {screenIndex: 3})} }
					>
					<Link to="/screen3">Screen 3</Link>
				</div>
			</div>
            
        );        
    }
}


export default Nav
//module.exports = Nav