import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css';



const Login = () => {
    const [error, setError] = useState(null);
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(err => {
                setError(err.message);
            })

    }


    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter your password' required />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="Login" />
            </form>

            <p>New to Fake Amazon? <Link to='/signup'>Create New Account</Link></p>
        </div>
    );
};

export default Login;