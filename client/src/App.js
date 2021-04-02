import Home  from './Pages/Home'
// import ReactDOM from 'react-dom';
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
        <Route path="/">
         <Home />
        </Route>
        <Route path="/Library">
         Library
        </Route>
        <Route path="/Cart">
          Cart
        </Route>
        <Route path="/Profile">
         Profile
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
