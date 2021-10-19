import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/Home';
import { Route, BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter >
      <Route exact path="/" component={Home} />
    </ BrowserRouter >
  </React.StrictMode>,
  document.getElementById('root')
);
