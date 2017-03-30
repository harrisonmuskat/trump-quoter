import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import App from './containers/App'

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
