import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import ThemeProvider from './theme';

// Wrap App with ThemeProvider and BrowserRouter
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* CssBaseline to apply global MUI styles */}
      <CssBaseline />
      {/* Wrap App with BrowserRouter for routing */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
