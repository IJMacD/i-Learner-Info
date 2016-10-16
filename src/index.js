import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';

import App from './containers/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
