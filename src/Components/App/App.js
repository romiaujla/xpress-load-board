import React, {Component} from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

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

  render(){
    return (
      <BrowserRouter>
        <div className='App'>
          
        </div>
      </BrowserRouter>
    )
  }
}