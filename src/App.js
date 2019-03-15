import React, { Component } from 'react';
import Colors from './colors';
//import Navigation from './nav.js';
//import Form from './form.js';
//import Description from './description.js';
import { stones } from './arrays.js';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      stones: [], 
      stone: {}
    }
}

  componentDidMount(){
    this.setState(() => ({
      stones: stones,
      stone: stones[0]
    }))
  }
    
  handleChange = (e) => {
    console.log(e.target);
    const { value } = e.target
    const { stones } = this.state
    const stone = stones.filter((stone) =>
      stone.stone === value
    )

    this.setState({ stone: stone[0]})
  }

  render() {
    const { stone } = this.state
    const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '400px 1fr',
      justifyItems: 'center',
      alignItems: 'center',
      maxWidth: '600px',
      margin: '50px auto'
    };
    
    const inputStyle = {
      margin: '5px'
    };
    
    const imgStyle = {
      gridColumnStart: '1',
      width: '300px'
    };
      return (
      <div className="App">
        <div>
              <h1>{stone.stone}</h1>
              <p>{stone.description}</p>
          </div>
        <div className="container" style={containerStyle}>
          <img src={`../images/${stone.stone}.jpg`} alt="mosiac stepping stone" style={imgStyle}/>
          <form id='myForm' style={{gridColumnStart: '2', margin: '0 auto'}}>
              <select onChange={this.handleChange} id="stones" style={inputStyle}>
                {this.state.stones.map((stone, i) =>
                  <option key={i}>{stone.stone}</option>
                  )}
              </select>
          </form>
        </div> 
        <div>
          <Colors />
        </div>
      </div>
      
    );
  }
}

export default App;
