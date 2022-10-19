import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SignUp.css'


const SignUp = () => {

    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPass.value;
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        if (password !== confirmPassword) {
            setError('Password does not match');
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
            }
            )
            .catch(err => {
                setError(err.message);
            })

    }


    return (
        <div className='form-container'>
            <h1 className='form-title'>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter your email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter your password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirmPass">Confirm Password</label>
                    <input type="password" name='confirmPass' placeholder='Confirm password' required />
                </div>
                <p className='text-error'>{error}</p>
                <input className='btn-submit' type="submit" value="SignUp" />
            </form>
            <p>Already Have an Account? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default SignUp;