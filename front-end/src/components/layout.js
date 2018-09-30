import React from 'react';
import AppHeader from './AppHeader';

const Layout = Component => props => ([
  <AppHeader key="appBarHeader" />,
  <Component key="PageBodyContent" {...props} />,
]);

export default Layout;
