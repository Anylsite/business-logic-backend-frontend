import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import React from 'react';

import AppName from './appName';

export default Component => props => ([
  <AppBar key="appBarHeader" position="static">
    <Toolbar>
      <AppName />
    </Toolbar>
  </AppBar>,
  <Component key="PageBodyContent" {...props} />,
]);
