import { Link } from 'react-router-dom';

function Navbar({ location }) {

    return (
        <nav>
        <ul className="nav-menu navbar-inverse">
            <li className="nav-item">
                <Link to="/" className={`nav-link ${location === '/' ? 'active' : ''}`}>About Me</Link>
            </li>
            <li className="nav-item">
                <Link to="/resume" className={`nav-link ${location === '/resume' ? 'active' : ''}`}>Resume</Link>
            </li>
            <li className="nav-item">
                <Link to="/portfolio" className={`nav-link ${location === '/portfolio' ? 'active' : ''}`}>Portfolio</Link>
            </li>
            <li className="nav-item">
                <Link to="/contact" className={`nav-link ${location === '/contact' ? 'active' : ''}`}>Contact</Link>
            </li>
           
        </ul>
    </nav>
    )
}

export default Navbar;