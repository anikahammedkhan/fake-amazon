import React, { useContext } from 'react';
import './Navbar.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div className='navbar'>
            <img src={Logo} alt="" />
            <div className='nav-list'>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/about">About</Link></li>
                {user?.uid ? <button className='btn-logOut' onClick={logOut}>Log Out</button> :
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;