
import './App.css';
import React from 'react';
import Newcomponent from './components/Newcomponent';


class App extends React.Component{

styles={
  fontStyle: 'bold',
  color: 'teal'
};

  render(){
    return (
      <div className='App'>
        <h1 style={this.styles}> Welcome</h1>
        <Newcomponent/>
      </div>
    )
  }
}
export default App;


