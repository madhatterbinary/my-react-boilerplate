import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from './components/Main';
import 'style!css!foundation-sites/dist/foundation.min.css'

// // Load foundation
// $(document).foundation();
// // App css
// require('style!css!sass!applicationStyles')
ReactDOM.render(
  <Main/>,
  document.getElementById('app')
);
