import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faShippingFast } from '@fortawesome/free-solid-svg-icons';
import './index.css';
import App from './Components/App/App';

library.add(
    faShippingFast // logo-icon
);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    document.getElementById('root')
);

