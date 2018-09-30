import Grid from '@material-ui/core/Grid';
import React from 'react';
import AppHeader from './AppHeader';

const Layout = Component => props => ([
  <AppHeader key="appBarHeader" />,
  <Grid container key="PageBodyContent" direction="row" spacing={16}>
    <Grid item direction="column" lg={8} md={8} sm={12} spacing={32}>
      <div className="p-20 content-container">
        <Component {...props} />
      </div>
    </Grid>
    <Grid item direction="column" lg={4} md={4} sm={12}>
      <div className="p-20 content-container">
        Some Content Here...
      </div>
    </Grid>
  </Grid>,
]);

export default Layout;
