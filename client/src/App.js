import {Home, Library, Admin, Profile, Cart} from './Pages/Index'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Library from './Pages/Library';
//import Profile from './Pages/Profile';

function App() {
  const currentUser = localStorage.getItem('userId')
  return (
    <>
    <Router>
    <div className="App">
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
        </Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route path="/Profile">
         <Profile />
        </Route>
        <Route path="/Admin">
         <Admin />
        </Route>
        <Route path="/Login">

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
