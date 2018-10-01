import { MuiThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { PersistGate } from 'redux-persist/integration/react';

import {
  history, persistor, store, theme,
} from './config';
import { Details, Home } from './pages';

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <MuiThemeProvider theme={theme}>
          <Route exact path="/" component={Home.Page} />
          <Route exact path="/details/:sensorId" component={Details.Page} />
        </MuiThemeProvider>
      </ConnectedRouter>
    </PersistGate>
  </Provider>
);
