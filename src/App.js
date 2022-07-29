import React from 'react';
import { Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux';

import Routes from './routes/routesAdm';

import history from './services/history';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <div>
      <Provider store={store}>
        <AuthProvider>
          <Router history={history}>
            <Routes />
          </Router>
        </AuthProvider>
      </Provider>
    </div>
  );
}

export default App;
