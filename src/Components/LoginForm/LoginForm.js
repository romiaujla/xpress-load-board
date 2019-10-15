import React, { Component } from 'react';
import './LoginForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {

        const truck = findIconDefinition({
            prefix: 'fas',
            iconName: 'shipping-fast'
        })

        return (
            <section className='LoginForm'>
                <div className='LoginForm-child'>
                    <header>
                        <div className='logo'>
                            <FontAwesomeIcon icon={truck} className='truck-icon' />
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
                                    <button
                                        type='button'
                                        className='app-button'
                                    >
                                        Create Account
                                </button>
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

                                        />
                                    </label>
                                    <label htmlFor='password'>
                                        <span className='input-label'>
                                            Password:
                                    </span>
                                        <input
                                            type='password'
                                            required

                                        />
                                    </label>
                                </div>
                            </div>
                            <div className='submit-button-div'>
                                <button
                                    type='submit'
                                    className='app-button'
                                // onSubmit=''
                                >
                                    Login
                            </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        );
    }
}

export default LoginForm;