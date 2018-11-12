import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { store, persistor } from './store';
import { theme } from './theme';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MuiThemeProvider theme={theme}>
            <App />
          </MuiThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default Root;
