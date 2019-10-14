import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className='LoginForm'>
                <form className='LoginForm-form'>
                    <fieldset>
                        <legend>
                            Login Page
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
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        <div className='login-div'>
                        <div className='div-header'>
                                <div className='left-line'></div>
                                <div className='center-text'>Existing User</div>
                                <div className='right-line'></div>
                            </div>
                        </div>
                        <div className='submit-button-div'>
                            <button 
                                type='submit'
                                className='app_button'
                                // onSubmit=''
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