import AppBar from '@material-ui/core/AppBar/AppBar';
import Toolbar from '@material-ui/core/Toolbar/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';
import React from 'react';
import PropTypes from 'prop-types';
import AppName from './appName';

const AppHeader = ({ showBackButton }) => (
  <AppBar position="fixed">
    <Toolbar>
      {showBackButton && (
        <IconButton color="inherit" aria-label="Menu" href="/">
          <ArrowBack />
        </IconButton>
      )}
      <AppName />
    </Toolbar>
  </AppBar>
);

AppHeader.displayName = 'AppHeader';

AppHeader.propTypes = {
  showBackButton: PropTypes.bool,
};

AppHeader.defaultProps = {
  showBackButton: false,
};

export default AppHeader;
