import { createMuiTheme } from '@material-ui/core/styles';
import Config from './config';

export default createMuiTheme({
  palette: {
    primary: Config.app.colors,
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: 'Open Sans',
      },
    },
  },
  typography: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    headline: {
      fontWeight: 100,
      fontSize: '2rem',
    },
  },
});
