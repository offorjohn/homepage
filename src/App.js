import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';  // Import useTheme
import Box from '@mui/material/Box';  // Import Box for layout
import IconButton from '@mui/material/IconButton';  // Import IconButton
import MenuIcon from '@mui/icons-material/Menu';  // Import MenuIcon
import CloseIcon from '@mui/icons-material/Close';  // Import CloseIcon
import './App.css';

import Logo from './logo/logo';  // Assume you have a Logo component

// Define the LeftSidebar component
const LeftSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // Initialize state for menu toggle
  const theme = useTheme();  // Use MUI theme

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);  // Toggle menu state
  };

  return (
    <Box
      sx={{
        height: '7.6vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingRight: 3,
        backgroundColor: theme.palette.background.default,  // Example theme-based style
      }}
    >
      {/* IconButton for Menu Toggle */}
      <IconButton
        color="inherit"
        sx={{
          fontSize: 40,
          fontWeight: 'bold',
          display: { xs: 'block', md: 'none' },  // Show on mobile only
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

// Define the Footer component
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '20px 0',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <p>&copy; 2024 My Website. All rights reserved.</p>
    </Box>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header className="App-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Logo
            sx={{
              position: 'absolute', // Absolute positioning for the logo within the header
              top: { xs: 35, md: 44 },
              left: { xs: 16, md: 24 },
            }}
          />
          <LeftSidebar />
        </header>

        {/* Body Section */}
        <Box
          sx={{
            padding: '40px',
            backgroundColor: '#f5f5f5',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <h2>Welcome to My Homepage</h2>
          <p>This is the main body content area of the page.</p>
          <p>
            You can customize this section with any content you want. Add
            images, text, links, or even more components as needed.
          </p>
        </Box>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
