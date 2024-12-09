/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './App.css';

// Define the LeftSidebar component
const LeftSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const theme = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        height: '7.6vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 3,
        backgroundColor: theme.palette.background.default, // Example theme-based style
      }}
    >
      {/* IconButton for Menu Toggle */}
      <IconButton
        color="inherit"
        sx={{
          fontSize: 40,
          fontWeight: 'bold',
          display: { xs: 'block', md: 'none' }, // Show on mobile only
        }}
        onClick={toggleMenu}
        aria-label="toggle menu"
      >
        {isMenuOpen ? <CloseIcon sx={{ fontSize: 'inherit' }} /> : <MenuIcon sx={{ fontSize: 'inherit' }} />}
      </IconButton>

      {/* Conditional rendering of menu content */}
      {isMenuOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '7.6vh', // Below the header
            left: 0,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            zIndex: theme.zIndex.drawer,
            padding: 2,
          }}
        >
          <p>Menu Content</p>
        </Box>
      )}
    </Box>
  );
};

// Main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My App</h1>
        <LeftSidebar />
      </header>
    </div>
  );
}

export default App;
