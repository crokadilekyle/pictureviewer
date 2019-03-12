import React from 'react';
import './App.css';

function Navigation() {

    const navStyle = {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#99ff99',
        padding: '10px',
        justifyContent: 'flex-end',
        listStyle: 'none',
        textAlign: 'center'
    }

     return(
        <nav>
            <ul  style={navStyle}>
                <li style={{marginRight: 'auto'}}>Merlsaics</li>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </nav>
    );
}

export default Navigation;