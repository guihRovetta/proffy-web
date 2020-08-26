import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './config/history';

import { AuthProvider } from './context/AuthContext';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <>
      <AuthProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </AuthProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
