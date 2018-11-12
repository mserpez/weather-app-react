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
      main: '#2196f3', // Main Blue
      light: '#2196f3', // Second Blue
      white: '#FFF',
      grey: '#F0f0f0',
      black: '#333333',
    },
    error: {
      main: '#d41124', // Default Red for Errors
    },
  },
});

export default Theme;
