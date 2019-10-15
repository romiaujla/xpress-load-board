import React, { Component } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    render() {
        return (
            <header className='Header'>
                <div className='logo'>
                    <FontAwesomeIcon icon='shipping-fast' className='truck-icon' />
                    <div className='app-title'>
                        <span className='xpress'>Xpress</span>
                        <span className='dispatcher'>Dispatcher</span>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;