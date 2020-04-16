import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from 'store';
import 'assets/iconfont/iconfont.css';
import 'styles/reset.scss';
import 'scripts/rem';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  (
    <Provider store={store}>
      <App />
    </Provider>
  ), 
  document.getElementById('root')
);


serviceWorker.unregister();