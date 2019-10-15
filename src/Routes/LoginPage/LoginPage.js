import React, { Component } from 'react';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default class LoginPage extends Component {

    render() {
        return (
            <section className='LoginPage'>
                <LoginForm />
            </section>
        );
    }
}
