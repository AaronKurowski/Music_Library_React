import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Music Library</h1>;
console.log(jsxElement);

// This uses App as our main entry point to get all this to work
ReactDOM.render(<App />, document.getElementById('root'));