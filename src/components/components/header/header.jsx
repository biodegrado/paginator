import './header.scss';
import React from "react";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img src="logo.png" alt="Company Logo" className="logo" />
            <nav>
                    <ul className='link-root'>
                    <li className='link'><Link to="/">Home</Link></li>
                    <li className='link'><Link to="/about">About</Link></li>
                    <li className='link'><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
        </header>
    );
}

export default Header;
