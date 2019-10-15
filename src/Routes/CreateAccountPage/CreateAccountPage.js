import React, { Component } from 'react';
import CreateAccountForm from '../../Components/CreateAccountForm/CreateAccountForm';

class CreateAccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <section className='CreateAccountPage'>
                <CreateAccountForm />
            </section>
        );
    }
}
 
export default CreateAccountPage;