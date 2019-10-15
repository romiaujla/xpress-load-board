import React, {Component} from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import LoginPage from '../../Routes/LoginPage/LoginPage';
import CreateAccountPage from '../../Routes/CreateAccountPage/CreateAccountPage';

export default class App extends Component {

  constructor(props){
    super(props);
    // initialize the state variables below
    this.state = {
      hasError: false
    }
  }

  static getDerivedStateFromError(error){
    console.log(error);
    return {
      hasError: true
    }
  }

  static componentDidMount = () => {
    // get data from the database and set state
  }

  render(){
    return (
        <div className='App'>
          <Header />
          {
            this.state.hasError && <p className='red'>There was an error</p>
          }
          <main className='App-main'>
            <Switch>
              <Redirect
                exact
                from='/'
                to='/login'
              />
              <Route
                exact
                path='/login'
                component={ LoginPage }
              />
              <Route
                exact
                path='/create-account'
                component={ CreateAccountPage }
              />
            </Switch>
          </main>
        </div>
    )
  }
}