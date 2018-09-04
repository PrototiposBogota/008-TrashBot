import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import Hello from './components/Hello';
import AppBar from './components/MenuAppBar';

import lightGreen from '@material-ui/core/colors/lightGreen';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const muiTheme = createMuiTheme({
  palette: {
      primary: lightGreen,
      // secondary: green
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <AppBar />
  </MuiThemeProvider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
