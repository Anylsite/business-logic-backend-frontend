import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      light: '#1abc9c',
      main: '#16a085',
      dark: '#27ae60',
      contrastText: '#fff',
    },
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
