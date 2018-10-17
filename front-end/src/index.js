import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  // eslint-disable-next-line no-undef
  document.getElementById('root'),
);
registerServiceWorker();
