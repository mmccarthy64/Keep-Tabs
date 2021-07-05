import React from 'react';
import ReactDOM from 'react-dom';
import App from './Dashboard';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import manageLibrary from './reducers/manageLibrary'
import thunk from 'redux-thunk';


import 'bootstrap/dist/css/bootstrap.min.css'

require('dotenv').config();

const store = createStore(manageLibrary, compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
  <React.StrictMode>
    < Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//       <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
