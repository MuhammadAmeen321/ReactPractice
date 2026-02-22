import React, { Component } from "react";

class MyComponent extends Component {

constructor(props) {
  super(props)

  this.state = {
     count: 0
  }
}

updatestate =()=>{
   this.setState({count: this.state.count+1});
}


    render() {
        const {count} = this.state;
        return (
            <div>            
                <button onClick={this.updatestate}>click {count}</button>
            </div>
        );
    }
}

export default MyComponent;