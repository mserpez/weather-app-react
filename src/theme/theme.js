import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  typography: {
    fontFamily: 'Titillium Web',
    title: {
      color: '#f00',
    },
  },
  palette: {
    background: {
      paper: '#FFFFFF',
    },
    primary: {
      main: '#2a3c66', // Main Blue
      light: '#268ca6', // Second Blue
      white: '#FFF',
    },
    error: {
      main: '#d41124', // Default Red for Errors
    },
  },
});

export default Theme;
