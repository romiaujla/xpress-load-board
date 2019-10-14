import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';

export default class App extends Component {

  constructor(props){
    super(props);
    // initialize the state variables below
    this.state = {

    }
  }

  static componentDidMount = () => {
    // get data from the database and set state
  }

  renderRoutes = () => {
    const loginPath = [
      '/'
    ]

    const loginRoute = <Route 
      exact
      path={loginPath}
      component={LoginForm}
      />

    return {
      loginRoute,
    }
  }

  render(){
    return (
      <BrowserRouter>
        <div className='App'>
          {this.renderRoutes().loginRoute}
        </div>
      </BrowserRouter>
    )
  }
}