import React from 'react';
import { NavLink } from 'react-router-dom';
import signUp from '../images/signup.png'

const Signup = () => {
    return (
        <div className='main-container'>
            <section className='signup'>
                <div className='container mt-6'>
                    <div className='signup-content'>
                        <h2 className='form-title'>Sign up</h2>
                        <div className='form'>
                            <form className='register-form' id='register-form'>
                                <div className="input-box">
                                    <label for="name">
                                        <i className="zmdi zmdi-account"></i>
                                    </label>
                                    <input type="text" id="name" name='name' placeholder='Enter Name' />
                                </div>
                                <div className="input-box">
                                    <label for="email"><i className="zmdi zmdi-email"></i>
                                    </label>
                                    <input type="email" required id="email" name='email' placeholder='Enter Email' />
                                </div>
                                <div className="input-box">
                                    <label for="phone"><i className="zmdi zmdi-phone"></i>
                                    </label>
                                    <input type="number" id="phone" name='phone' placeholder='Enter Phone No.' />
                                </div>
                                <div className="input-box">
                                    <label for="work"><i class="zmdi zmdi-case"></i>
                                    </label>
                                    <input type="text" id="work" name='work' placeholder='Enter Work' />
                                </div>
                                <div className="input-box">
                                    <label for="password"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" id="password" name='password' placeholder='Enter Password' />
                                </div>
                                <div className="input-box">
                                    <label for="cpassword"><i className="zmdi zmdi-lock"></i></label>
                                    <input type="password" id="cpassword" name='cpassword' placeholder='Enter Confirm Password' />
                                </div>
                                <div className='submit btn'>
                                    <input type='submit' id='submit' name='submit'/>
                                </div>
                            </form>
                            <div className='signup-img'>
                                <figure>
                                    <img src={signUp} alt='signUP'/>
                                </figure>
                                <NavLink className="nav-link lnk" to="/login">I am already Registered</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Signup;