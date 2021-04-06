import Home  from './Pages/Home'
import Library from './Pages/Library'
import Admin from './Pages/Admin'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/Library">
         <Library />
        </Route>
        <Route path="/Cart">
          Cart
        </Route>
        <Route path="/Profile">
         Profile
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
