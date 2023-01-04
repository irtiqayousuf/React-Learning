import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './pages/home';
import About from './pages/about';
import Explore from './pages/explore';
import Contact from './pages/contact';
import NotFound from './pages/notfound';
import Menu from './pages/menu';


let menuItems = [ 
  { id:1, name : "Home", path : "/" },
  { id:2, name : "About", path : "/about" },
  { id:3, name : "Contact Us", path : "/contact" },
  { id:4, name : "Explore", path : "/explore" }
]; 

const routing = (
  
    <Router>
      <Menu menuList={menuItems}/>
        {/* first one is the default path */}
        <Switch>
          <Route exact path="/" component={Home}/>   
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/explore" component={Explore}/>
          <Route component={NotFound} />
        </Switch>
    </Router>
  
)
ReactDOM.createRoot(document.getElementById('root'));
render(routing);