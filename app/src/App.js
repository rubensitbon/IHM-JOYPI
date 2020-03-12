import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import IFTTT from './pages/IFTTT';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>JoyPi IHM - Centrale Lille</h1>
        </header>
        <div className="App-links">
          <Link className="App-link" to="/">
            Home
          </Link>
          <Link className="App-link" to="/ifttt">
            IFTTT
          </Link>
        </div>

        <Switch>
          <Route path="/ifttt">
            <IFTTT />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
