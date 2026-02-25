import React, {Component} from "react";

class Newcomponent extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Subscribe to simply learn'
      }
    }
    render(){
        return(
            <div className="App"> 
             <h3>{this.state.message}</h3>
         </div>

        );

    }
}

export default Newcomponent;