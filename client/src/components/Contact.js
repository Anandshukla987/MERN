import React from 'react';

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='info'>
                <div className='detail'>
                    <div>
                        <i className="zmdi zmdi-phone info-icon" />
                    </div>
                    <div>
                        <h5>Phone</h5>
                        <h6>9236000032</h6>
                    </div>
                </div>
                <div className='detail'>
                    <div>
                        <i className="zmdi zmdi-email info-icon" />
                    </div>
                    <div>
                        <h5>Email</h5>
                        <h6>abcd@technical.com</h6>
                    </div>
                </div>
                <div className='detail'>
                    <div>
                        <i className="zmdi zmdi-pin-drop info-icon" />
                    </div>
                    <div>
                        <h5>Address</h5>
                        <h6>123 Xyz, Abc</h6>
                    </div>
                </div>
            </div>
            <div className='connect-withUs'>
                <div className='connect-content'>
                    <h3>Get in Touch</h3>
                    <div className='user-input'>
                        <div>
                            <input type='text' placeholder='Your name' />
                        </div>
                        <div>
                            <input type='text' placeholder='Your email' />
                        </div>
                        <div>
                            <input type='text' placeholder='Your phone' />
                        </div>
                    </div>
                    <div className='mssg'>
                        <textarea placeholder='message' />
                    </div>
                    <div className='btn'>
                        <input type='submit' id='submit' placeholder='Your name' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;