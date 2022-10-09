import React from 'react';
import './Navbar.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="" />
            <div className='nav-list'>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/about">About</Link></li>
            </div>

        </div>
    );
};

export default Navbar;