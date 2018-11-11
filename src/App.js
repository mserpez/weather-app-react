import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { store } from './store';
import { theme } from './theme';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <div>
            APP
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
