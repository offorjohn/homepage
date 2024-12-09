import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useTheme } from "@mui/material/styles"; // Import useTheme
import Box from "@mui/material/Box"; // Import Box for layout
import IconButton from "@mui/material/IconButton"; // Import IconButton
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon
import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon

import Typography from "@mui/material/Typography";

import { bgGradient } from "./theme/css";
import "./App.css";

import Logo from "./logo/logo"; // Assume you have a Logo component

// Define the LeftSidebar component
const LeftSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize state for menu toggle
  const theme = useTheme(); // Use MUI theme

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  return (
    <Box
      sx={{
        height: "7.6vh",
        marginTop: "-6px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingRight: 3,
      }}
    >
      {/* IconButton for Menu Toggle */}
      <IconButton
        color="inherit"
        sx={{
          fontSize: 40,
          fontWeight: "bold",
          position: "relative",
          top: 18,
          display: { xs: "block", md: "none" }, // Show on mobile only
        }}
        onClick={toggleMenu}
      >
        {" "}
        {isMenuOpen ? (
          <CloseIcon sx={{ fontSize: "inherit" }} />
        ) : (
          <MenuIcon sx={{ fontSize: "inherit" }} />
        )}
      </IconButton>

      {/* Conditional rendering of menu content */}
      {isMenuOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "60px",
            right: 0,
            backgroundColor: theme.palette.background.paper,
            boxShadow: 3,
            borderRadius: 2,
            padding: 2,
            width: 200,
            zIndex: 999,
          }}
        >
          {/* Menu Items */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "8px 12px",
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.primary.main,
                },
              }}
              // eslint-disable-next-line no-return-assign
              onClick={() => (window.location.href = "login")}
            >
              Login
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.primary",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "8px 12px",
                borderRadius: 1,
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                  color: theme.palette.primary.main,
                },
              }}
              // eslint-disable-next-line no-return-assign
              onClick={() =>
                (window.location.href = "https://otpninja.com/register")
              }
            >
              Register
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};


// Main App component
function App() {
  const theme = useTheme();
  return (
    <Router>
      <div className="App">
        {/* Header Section */}
        <header
          className="App-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Logo
            sx={{
              position: "absolute", // Absolute positioning for the logo within the header
              top: { xs: 35, md: 44 },
              left: { xs: 16, md: 24 },
            }}
          />
        </header>

        <Box
          sx={{
            ...bgGradient({
              color: theme.palette.background.default,
              imgUrl: "/assets/background/overlay_3.jpg",
            }),
            height: 1,
            position: "relative",
          }}
        >
          {/* Left Sidebar (mobile menu) */}
          <LeftSidebar />

          {/* Logo */}
          <Logo
            sx={{
              top: { xs: 35, md: 44 },
              left: { xs: 16, md: 24 },
            }}
          />
         
        </Box>
        

      </div>
    </Router>
  );
}

export default App;
