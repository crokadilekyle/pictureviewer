import React, { Component } from 'react';
import { colors } from './arrays.js';

class Colors extends Component{
    constructor(props){
        super(props);
        this.state = {
            colors: [],
            color: {}
        }
    }


componentDidMount(){
    this.setState(() => ({
        colors: colors,
        color: colors[0]
    }))
}

handleChange =(e) => {
    console.log(e.target.value);
    const { value } = e.target
    const { colors } = this.state
    console.log(colors);
    
  

    this.setState({ color: value})
}

render() {
       
    return(
        <div>
            <select onChange={this.handleChange}>
                {this.state.colors.map((color, i) =>
                  <option key={i}>{color}</option>
                  )}
            </select>
            <div style={{margin: "10px auto", border: "1px solid black", backgroundColor: `${this.state.color}`, width: "300px", height: "300px"}}>
            </div>
        </div>
     )
    }
}

export default Colors;