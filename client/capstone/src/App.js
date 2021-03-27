<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import './App.css';

function App() {
  
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Library">
         Library
        </Route>
        <Route path="/Login">
          Login/Register
        </Route>
        <Route path="/Cart">
          Cart
        </Route>
        <Route path="/Profile">
         Profile
        </Route>
        <Route path="/">
          Home
        </Route>
      </Switch>
    </div>
    </Router>
>>>>>>> 219830483afde9851af97179b72d816c3f2906ba
  );
}

export default App;
