/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { bgGradient } from "../theme/css";
import Logo from "../logo/logo";
import TelegramIcon from "../telegram";

// LeftSidebar component for handling the mobile menu toggle
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
// Main HomeView component
export default function HomeView() {
  const theme = useTheme();

  return (
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

      <Box
        sx={{
          border: "2px solid white",
          borderRadius: 2,
          padding: 7,
          position: "absolute",
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          maxWidth: "900px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 10,
          width: "90%",
          "@media (max-width: 600px)": {
            top: "19%",
            padding: 4,
          },
          "@media (max-width: 400px)": {
            top: "20%",
            padding: 2,
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "white",
            textAlign: "left",
            marginBottom: 3,
            fontWeight: "bold",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            lineHeight: 1.8,
            whiteSpace: "pre-line",
          }}
        >
          Welcome to OTP Ninja, your one-stop solution for secure and efficient
          one-time passcodes. We provide top-notch services for authentication
          and security, ensuring that your online experience is as safe and
          smooth as possible.
          {"\n"}
          Join us today and experience the future of authentication with OTP
          Ninja!
          {"\n\n"}© 2024 OTP ENTERPRISES, All Rights Reserved
        </Typography>
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          fontWeight: "bold",
          width: "100%",
          padding: { xs: "-2%", md: "1%" },
          borderTop: "1px solid #ccc",
          backgroundColor: "#f9f9f9",
          gap: { xs: -5, md: 5 },
          position: "absolute",
          bottom: 0,
        }}
      >
        <Logo
          sx={{
            order: { xs: 0, md: 0 },
            mb: { xs: 2, md: -10 },
            marginLeft: { xs: 0, md: 2 },
          }}
        />

        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            gap: 5,
            alignItems: "center",
          }}
        >
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Box sx={{ textDecoration: "none" }}>About</Box>
          </Link>

          <Link to="/private" style={{ textDecoration: "none" }}>
            <Box style={{ textDecoration: "none" }}>Privacy Policy </Box>
          </Link>
          <Box>Terms of Service</Box>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            gap: 2,
            flexDirection: "row",
            textAlign: "center",
            mt: 3,
          }}
        >
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Box sx={{ textDecoration: "none", mt: -5 }}>About</Box>
          </Link>
          <Link to="/private" style={{ textDecoration: "none" }}>
            <Box sx={{ textDecoration: "none", mt: -5 }}>Privacy Policy</Box>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <Box sx={{ textDecoration: "none", mt: -5 }}>Terms of Service</Box>
          </Link>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "block" },
            flexDirection: { xs: "row", md: "initial" },
            width: { xs: "auto", md: "13%" },
            justifyContent: { xs: "center", md: "initial" },
            alignItems: { xs: "center", md: "initial" },
          }}
        >
          © 2024 OTP Ninja
        </Box>
      </Box>

      <Box sx={{ position: "absolute", bottom: 16, right: 16, zIndex: 5 }}>
        <TelegramIcon />
      </Box>
    </Box>
  );
}
