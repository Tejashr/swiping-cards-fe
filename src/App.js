import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Nav from './nav';
import Signup from './signup';
import Instructions from './instructions';

import Card from './card';
import Signin from './signin';
import History from './history';

function App() {
  return (
    <>
    <Router>
        <Nav></Nav>
        <div className="container">
          <Switch>
            <Route path="/signup" component={Signup} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/" component={Instructions} exact />
            <Route path="/card/:id" component={Card} exact />
            <Route path="/history/:id" component={History} exact />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
