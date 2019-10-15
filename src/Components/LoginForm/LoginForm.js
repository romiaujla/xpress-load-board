import React, { Component } from 'react';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        return (
            <section className='LoginForm'>
                <header>
                    <div className='logo'>
                        <FontAwesomeIcon icon='shipping-fast' className='truck-icon' />
                        <div className='app-title'>
                            <span className='xpress'>Xpress</span>
                            <span className='dispatcher'>Dispatcher</span>
                        </div>
                    </div>
                </header>
                <form className='LoginForm-form'>
                    <fieldset>
                        <legend>
                            <h2>Login Page</h2>
                        </legend>
                        <div className='sign-up-div'>
                            <div className='div-header'>
                                <div className='left-line'></div>
                                <div className='center-text'>New User</div>
                                <div className='right-line'></div>
                            </div>
                            <div className='sign-up-button'>
                                <Link to='/register' className='app-button'>
                                    Create Account
                                    </Link>
                            </div>
                        </div>
                        <div className='login-div'>
                            <div className='div-header'>
                                <div className='left-line'></div>
                                <div className='center-text'>Existing User</div>
                                <div className='right-line'></div>
                            </div>
                            <div className='login-inputs'>
                                <label htmlFor='user-name'>
                                    <span className='input-label'>
                                        Username:
                                    </span>
                                    <input
                                        type='text'
                                        required
                                        id='user-name'
                                        name='user-name'
                                        className='user-name'
                                    />
                                </label>
                                <span className='error-message'>Invalid Username</span>
                                <label htmlFor='password'>
                                    <span className='input-label'>
                                        Password:
                                    </span>
                                    <input
                                        type='password'
                                        required

                                    />
                                </label>
                                <span className='error-message'>Password did not match</span>
                            </div>
                        </div>
                        <div className='submit-button-div'>
                            <span className='forgot-password'>Forgot Password?</span>
                            <button
                                type='submit'
                                className='app-button'
                            >
                                Login
                            </button>
                        </div>
                    </fieldset>
                </form>
            </section>
        );
    }
}

export default LoginForm;