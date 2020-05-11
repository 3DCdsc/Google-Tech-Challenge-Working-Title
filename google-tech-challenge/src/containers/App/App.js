import React from 'react';

import './App.css';
import Home from '../Home/Home';
import WaitHome from '../WaitHome/WaitHome';
import About from '../About/About';
import Register from '../Register/Register';
import Resources from '../Resources/Resources';
import Themes from '../Themes/Themes';
import FAQ from '../FAQ/FAQ';
import PointOfContact from '../PointOfContact/PointOfContact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import StarfieldBackground from '../../components/StarfieldBackground/StarfieldBackground';
import StickyNavBar from '../../components/StickyNavBar/StickyNavBar';


function App() {
  return (
    <Router>
      <div className="App">
    <StickyNavBar/>
    {/* <Home/>
    <About/>
    <Resources/>
    <FAQ/> */}
    <Switch>
    <Route exact path = "/" component={Home}/>
    <Route exact path = "/wait" component={WaitHome}/>
    <Route exact path = "/about" component={About}/>
    <Route exact path = "/register" component={Register}/>
    <Route exact path = "/themes" component={Themes}/>
    <Route exact path = "/contact" component={PointOfContact}/>
    <Route exact path = "/FAQ" component={FAQ}/>
    <Route exact path = "/resources" component={Resources}/>
    </Switch>
      </div>
      <StarfieldBackground/>
    </Router>
  );
}


export default App;
