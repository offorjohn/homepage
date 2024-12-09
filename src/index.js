import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import ThemeProvider from './theme';



// Wrap App with ThemeProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* CssBaseline to apply global MUI styles */}
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
