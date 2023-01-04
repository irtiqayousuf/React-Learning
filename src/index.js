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