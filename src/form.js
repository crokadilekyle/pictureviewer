import React from 'react';
import './arrays.js';


function Form(props){
    

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

    
    //function onStoneChange(e) {
    //    console.log('something happened', e.target.value);

   //    props.handleStoneChange(e.target.value);
   // }

        return (
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
    );
}

        





export default Form;