import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import SettingsProvider from './Context/Settings';
import { MantineProvider } from '@mantine/core';
import ModeProvider from './Context/Mode';
import AuthProvider from './Context/Auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <AuthProvider>
        <ModeProvider>
          <SettingsProvider>
            <App />
          </SettingsProvider>
        </ModeProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
