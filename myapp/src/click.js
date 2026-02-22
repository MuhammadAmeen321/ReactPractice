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
                <h2>This is just for commit</h2>
                <button onClick={this.updatestate}>click {count}</button>
            </div>
        );
    }
}

export default MyComponent;