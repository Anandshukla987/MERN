import React from 'react';
import logo from '../images/logIn.jpg';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <div className='main-container'>
            <div className='login'>
                <h2>Login</h2>
                <div className='login-content'>
                    <div className='login-img'>
                        <figure>
                            <img src={logo} alt='Login'/>
                        </figure>
                    </div>
                    <form className='login-form' id='login-form'>
                        <div className="input-box">
                            <label for="name">
                                <i className="zmdi zmdi-account"></i>
                            </label>
                            <input type="text" id="name" name='name' placeholder='Enter Name' />
                        </div>
                        <div className="input-box">
                            <label for="password"><i className="zmdi zmdi-lock"></i></label>
                            <input type="password" id="password" name='password' placeholder='Enter Password' />
                        </div>
                        <div className='submit btn'>
                            <input type='submit' id='submit' name='login' value='Log in' />
                        </div>
                        <NavLink className='forgot-password' to='#' >Forgot Password</NavLink>
                        <div  className='login-option'>
                            <p>or login with</p>
                            <i class="zmdi zmdi-facebook-box icon"></i>
                            <i class="zmdi zmdi-twitter-box icon"></i>
                            <i class="zmdi zmdi-google-plus-box icon"></i>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;