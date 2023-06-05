import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { store, persistor } from 'Redux/store';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/phonebook">
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </PersistGate>
  </>
);
