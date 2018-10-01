import Grid from '@material-ui/core/Grid';
import React from 'react';
import AppHeader from './AppHeader';

const Layout = Component => props => ([
  <AppHeader key="appBarHeader" />,
  <Grid container key="PageBodyContent" direction="row">
    <div className="p-20 content-container">
      <Component {...props} />
    </div>
  </Grid>,
]);

export default Layout;
