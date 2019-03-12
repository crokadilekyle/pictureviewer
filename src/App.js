import React, { Component } from 'react';
import Navigation from './nav.js';
import Form from './form.js';
import './arrays.js';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      stone: window.stoneOptions.stoneDesigns[0],
      stones: window.stoneOptions.stoneDesigns,
    }

    this.handleStoneChange = this.handleStoneChange.bind(this);
  }
   handleStoneChange(selected) {
    console.log(selected);
     this.setState(state => ({
       stone: selected
     }));
   }
  
  render() {
  
      return (
      <div className="App">
        <div className="container">
          <Navigation />
            <h1>Choose a Stepping Stone</h1>
                <Form stone={this.state.stone} stones={this.state.stones} handleStoneChange={this.handleStoneChange}/> 
        </div>
      </div>
    );
  }
}

export default App;
