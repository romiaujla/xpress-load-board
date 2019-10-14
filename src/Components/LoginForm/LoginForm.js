import React, { Component } from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <section className='LoginForm'>
                <form className='LoginForm__form'>
                    <fieldset>
                        <legend>
                            Login
                        </legend>
                        

                     
                    </fieldset>
                </form>
            </section>
        );
    }
}
 
export default LoginForm;