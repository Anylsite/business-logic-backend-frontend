import Typography from '@material-ui/core/Typography/Typography';
import React from 'react';
import { Config } from '../config';

const AppName = () => (
  <Typography variant="title" color="inherit">
    {Config.app.name}
  </Typography>
);

AppName.displayName = 'AppName';

export default AppName;
