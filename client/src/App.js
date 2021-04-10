import {Home, Library, Admin, Profile, Cart} from './Pages/Index'
import {useState} from 'react'
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  currentUser = useState(localStorage.getItem('userId'))
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Library">
         <Library />
        </Route>
        <Route path="/Cart">
          <Cart currentUser={currentUser}/>
        </Route>
        <Route path="/Profile">
         <Profile />
        </Route>
        <Route path="/Admin">
         <Admin />
        </Route>
        <Route path="/">
         <Home />
        </Route>
        <Route path="/Admin">
         <Admin />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
