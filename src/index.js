import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from '@testing-library/react';
import Home from './pages/home';
import App from './App';
import Register from './pages/register.js';
import Login from './pages/login.js';


const routing = (
  
    <Router>
       {/* first one is the default path */}        
          <Route path="/" component={App}/>
          <Route path="/register" component={Register}/> 
          <Route path="/login" component={Login}/>
          <Route path="/home" component={Home}/>         
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