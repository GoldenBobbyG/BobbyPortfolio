import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <h1 className="header-title">Robert Strickland</h1>
            <nav>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resume" className={`nav-link ${location.pathname === '/resume' ? 'active' : ''}`}>Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className={`nav-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
                    </li>
                   
                </ul>
            </nav>        
        </header>
    );
}

export default Header;
