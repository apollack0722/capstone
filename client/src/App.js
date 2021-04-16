import {Home, Library, Admin, Profile, Cart } from './Pages/Index'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Library from './Pages/Library';
//import Profile from './Pages/Profile';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function App() {
  const currentUser = localStorage.getItem('userId')
  return (
    <>
    <Router>
    <div className="App">
      {currentUser ? <h5>You are logged in</h5> : <h5>You are NOT logged in</h5>}
      <Switch>
        <Route path="/Library">
          <Library currentUser={currentUser} />
        </Route>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">pineApple TV</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/Library">Library</Nav.Link>
              <Nav.Link href="/Cart">Cart</Nav.Link>
              <Nav.Link href="/Profile">Profile</Nav.Link>
              <Nav.Link href="/Admin">Admin</Nav.Link>
              <Nav.Link href="/Login">Login</Nav.Link>
            </Nav>
          </Navbar>
    </Switch>
    </div>
    </Router>
    <Router>
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
      </Router>  
  </>
  );
}

      
export default App;
