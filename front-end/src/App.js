import { MuiThemeProvider } from '@material-ui/core';
import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router';

import { history, store, theme } from './config';
import { Home, Details } from './pages';

export default () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MuiThemeProvider theme={theme}>
        <Route exact path="/" component={Home.Page} />
        <Route exact path="/details/:sensorId" component={Details.Page} />
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>
);
