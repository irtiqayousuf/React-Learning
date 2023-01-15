import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Explore from './components/Explore';
import Menu from './App.js';


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
          
        </Switch>
    </Router>
  
)
ReactDOM.createRoot(document.getElementById('root'));
render(routing);
{/*ternary


import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Contact from './components/Contact';



function Goal(props) {
  const isGoal = props.isGoal;
	return (
		<>
			{ isGoal ? <Home/> : <Contact/> }
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);
/*}

{/* logical &&



import React from 'react';
import ReactDOM from 'react-dom/client';
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars = [ {name :'volvo'},
{name :'ferrari'}
];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage cars={cars} />);
*/}




{           /*if else 
  
  
  
  import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Home';
import Contact from './components/Contact';

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <Home/>;
  }
  return <Contact/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<Goal isGoal={false} />);*/}