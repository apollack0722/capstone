import {Home, Library, Admin, Profile, Cart} from './Pages/Index'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/NavBar';


function App() {
  const currentUser = localStorage.getItem('userId')
  return (
    <>
    <Router>
<NavBar/>
      <main>
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
      </main>
      </Router>
  </>
  );
}

      
export default App;
