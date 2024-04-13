import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../Assets/logos.png';
import './Navbar.css'; // Ensure the CSS file is correctly imported

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);  // Adding state for menu toggle

    const handleToggle = () => {
        setIsOpen(!isOpen);  // Function to toggle menu state
    };

    return (
        <>
            <div id='navbar' className='navbar'>
                <div className='navbar-content'>
                    <Link to='/'>
                        <div><img style={{ height: '44px' }} className='logo' src={logo} alt="logo" /></div>
                    </Link>

                    <div className='navbar-links'>
                        <div className='navbar-link'>
                            <Link to='/'>Home</Link>
                        </div>
                        <div className='navbar-link'>
                            <Link to='/about'>About</Link>
                        </div>
                    </div>

                    <div className='navbar-toggle' onClick={handleToggle}>
                        {isOpen ? 'Close Menu' : 'Open Menu'} {/* Conditional text based on state */}
                    </div>
                </div>

                {isOpen && (  // Conditional rendering based on state
                    <div className='mobile-menu'>
                        <div className='mobile-menu-links'>
                            <Link to='/'>Home</Link>
                            <Link to='/about'>About</Link>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
