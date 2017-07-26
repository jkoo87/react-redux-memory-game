import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
