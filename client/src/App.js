import {Home, Library, Admin, Profile, Cart} from './Pages/Index'
import {useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Library from './Pages/Library';
//import Profile from './Pages/Profile';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LoginModal } from './Components';

function App() {
  return (
    <Router>
    <div className="App">
    {/* <nav>
          
              <Link to="/">Home</Link>
              <Link to="/Library">Library</Link>
              <Link to="/Cart">Cart</Link>
              <Link to="/Profile">Profile</Link>
              <Link to="/Admin">Admin</Link>
        </nav> */}
          <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Movie Madness</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Library">Library</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
          <Nav.Link href="/Profile">Profile</Nav.Link>
          <Nav.Link href="/Admin">Admin</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            {/* <Link
              style={{ color: "rgba(255,255,255,.5)", padding: "7.5px" }}
              to="/logout"
            >

              Logout
            </Link> */}
       
        </Nav>
      </Navbar>
      <Switch>
        <Route path="/Library">
         <Library />
         <h1>Library page</h1>
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/Profile">
         <Profile />
         <h1>profile page</h1>
        </Route>
        <Route path="/Admin">
         <Admin />
        </Route>
        <Route path="/Login">
          <h1>Log in page</h1>
        </Route>
        <Route path="/">
         <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
