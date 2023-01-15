import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const App = () => {
  return (
    <>
      <nav className='container-fluid bg-danger text-align-justify'>
        <div className="row">
          <div className="col-6">
            <h1 className='text-light m-4'>authSYS</h1>
          </div>
          <div className="col-6 bg-dark">
            <div className='row'>
              <div className="col-6">

              </div>
              <div className='col-6'>
                <ul>
                  <li></li>
                  <li><NavLink to={'/login'} className="btn btn-danger mt-3 text-light text-decoration-none">Sign In</NavLink>
                  </li>
                  <li><NavLink to={'/register'} className="btn btn-danger mt-3 text-light text-decoration-none">Register</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
}

export default App;

{/*import React from 'react';
import ReactDOM from 'react-dom/client';

function MissedGoal() {
	return <h1>MISSED!</h1>;
}

function MadeGoal() {
	return <h1>GOAL!</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal/>;
  }
  return <MissedGoal/>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Goal isGoal={false} />);*/}
