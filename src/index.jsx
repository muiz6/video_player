import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './ui/HomePage';

ReactDOM.render(
  (
    <React.StrictMode>
      <Router>
        <HomePage />
      </Router>
    </React.StrictMode>
  ),
  document.getElementById('root'),
);
