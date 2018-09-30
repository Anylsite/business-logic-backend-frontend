import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import React from 'react';
import AppName from './appName';

const AppHeader = () => (
  <AppBar position="static">
    <Toolbar>
      <AppName />
    </Toolbar>
  </AppBar>
);

AppHeader.displayName = 'AppHeader';

export default AppHeader;
