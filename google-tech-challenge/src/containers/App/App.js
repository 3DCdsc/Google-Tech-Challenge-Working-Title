import React from 'react';

import './App.css';
import Home from '../Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
    <Switch>
    <Route exact path = "/" component={Home}/>
    <Route exact path="/about"/>
    </Switch>
      </div>
    </Router>
  );
}


export default App;
