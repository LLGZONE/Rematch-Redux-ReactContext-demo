import * as React from 'react';
import { render } from 'react-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';

console.log('redux');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
