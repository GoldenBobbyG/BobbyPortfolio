import React from 'react';
import '../styles/Header.css';
import backgroundme from '../assets/memain.jpg';

function Header(props) {
   
    return (
        <header className="header">
            <h1 className="header-title">Robert Strickland</h1>
            <img src={backgroundme} alt="Robert Strickland" className="header-image" /> 
            {props.children}
        </header>
    );
}

export default Header;
