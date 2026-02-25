import React, { Component } from "react";
import App from './App.css';

class Classprops extends Component{

    render(){
        return <div className="App"> 
            <p> Hello this is props {this.props.name}
            </p>

            
        </div>
    }
}




export default Classprops