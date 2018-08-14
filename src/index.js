import React from 'react'; //import react
import ReactDOM from 'react-dom';// import react dom
import './index.css';//import css
import App from './components/App';//import class App
import registerServiceWorker from './registerServiceWorker';//import registerserviceworker
import {BrowserRouter} from 'react-router-dom';

/**
 * Create simple function
 * const getCurDate = () =>{ //create simple function
        const date = new Date();
        return date.toDateString();
    }
 */

/**
 * Create view using simple React.createElement
   const salam = React.createElement('h1',{},'Hallo');
 */

/**
 * Using JSX
   const salam = <h1>Hello Bro</h1>;
   const dateNow = <h1>Current Date: {getCurDate()}</h1>;
 */

/**
 * Rendering to HTML with id
 * 
   ReactDOM.render(salam, document.getElementById('root'));
   ReactDOM.render(dateNow, document.getElementById('root'));
 */

//rendering class to html with id root
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
