import React from 'react';
import './Navbar.css'
import Logo from '../../images/Logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="" />
            <div className='nav-list'>
                <li><a href="/home">Home</a></li>
                <li><a href="/products">Product</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
            </div>

        </div>
    );
};

export default Navbar;