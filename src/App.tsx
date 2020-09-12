import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';

import { AppStore, history, persistor } from './shared/store/';
import { ThemeProvider } from 'styled-components';
import { colors, fontSize } from 'src/assets/styles';
import Layaout from './components/templates/layaout';

function App() {
  return (
    <ThemeProvider theme={{ colors, fontSize }}>
      <Provider store={AppStore}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <Layaout />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
