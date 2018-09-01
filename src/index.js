import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configure-store';
import './index.css';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
