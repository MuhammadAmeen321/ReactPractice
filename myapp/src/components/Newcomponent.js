import React, {Component} from "react";
import bell from './Bell1.png';
import bell2 from './2.png';

class Newcomponent extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Subscribe to simply learn',
         but: 'subscribe',
         imageURL: bell
      }
    }
    styles={
        fontStyle: 'italic',
        color: 'purple'
    }
    ButtonChnage=()=>{
        this.setState({
            message: 'donot forget to press bellicon',
            but:'Subscribed'
        })
    }
    
    imageChange =()=>{
        this.setState({
            imageURL:bell2,
            message: 'Thank you Happy learning'
        })
    }
    render(){
        return(
            <div className="App"> 
             <h3 style={this.styles}>{this.state.message}</h3>
             <button onClick={this.ButtonChnage}>{this.state.but}</button>
             <p/>
             <img 
              style={{width:'30px', height: '30px'}}
              src={this.state.imageURL} 
              alt=""
              onClick={this.imageChange}
              />
         </div>

        );

    }
}

export default Newcomponent;