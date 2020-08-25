import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './config/history';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <Router history={history}>
        <Routes />
      </Router>
      <GlobalStyles />
    </>
  );
}

export default App;
