import React from 'react';
 function Description(props){
     return (
        <div id="description">
            <h1 >{props.stone}</h1>
            <p>{props.descriptions}</p>
        </div>
     )
 }

 export default Description;