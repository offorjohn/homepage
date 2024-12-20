import React, { useState } from "react";
import { useTheme } from "@mui/material/styles"; // Import useTheme
import { Grid, Stack } from "@mui/material";
import { Link,  } from 'react-router-dom'; // Import the useNavigate hook from React Router

import { Icon } from '@iconify/react';
import TelegramIcon from "./telegram";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import CardActions from "@mui/material/CardActions";

import { keyframes } from "@emotion/react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box"; // Import Box for layout
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton"; // Import IconButton
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon

import CloseIcon from "@mui/icons-material/Close"; // Import CloseIcon
import Typography from "@mui/material/Typography";
import { bgGradient } from "./theme/css";
import "./App.css";


import Logo from "./logo"; // Assume you have a Logo component

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
              onClick={() => (window.location.href = "https://app.otpninja.com/login")}
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
 
  
  const [showTelepop, setShowTelepop] = useState(false);
  
  const [time, setTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));


  
  const [isMenuOpe, setIsMenuOpe] = useState(true);

  // Define the animation for the button group
  const moveLeftToRight = keyframes`
      0% { transform: translateX(-100%); }
      100% { transform: translateX(0); }
      `;

  const beat = keyframes`
  0% { transform: scale(1); }
  25% { transform: scale(1.1); }
  50% { transform: scale(1); }
  75% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

  const cars = (
    <>
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            color: "rgb(245 158 11 / var(--tw-text-opacity, 1))",
            fontSize: 18,
          }}
        >
          ★★★★★
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          OTPNINJA saved me so much time and headache. No more waiting for codes
          methods. Their service is quick, efficient, and trustworthy.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Avatar Image */}
          <Avatar
            alt="Profile Image"
            src="/assets/background/www.jpg" // Replace with the actual path to your image
            sx={{ width: 40, height: 40, marginRight: 2 }} // Adjust the size of the avatar
          />

          {/* Typography Text */}
          <Typography variant="body2" fontWeight="bold">
            John.
            <br />
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            padding: "6px 12px",
            marginLeft: "16px", // Adjust the margin to move the button to the right
          }}
        >
          User
        </Button>
      </CardActions>
    </>
  );

  const card = (
    <>
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            color: "rgb(245 158 11 / var(--tw-text-opacity, 1))",
            fontSize: 18,
          }}
        >
          ★★★★★
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          OTPNINJA made verifying my accounts a breeze! Their quality numbers
          worked like a charm, and I felt much more secure online. Highly
          recommended!.
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Avatar Image */}
          <Avatar
            alt="Profile Image"
            src="/assets/background/wwe.jpg" // Replace with the actual path to your image
            sx={{ width: 40, height: 40, marginRight: 2 }} // Adjust the size of the avatar
          />

          {/* Typography Text */}
          <Typography variant="body2" fontWeight="bold">
            Offor Daniella.
            <br />
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            padding: "6px 12px",
            marginLeft: "16px", // Adjust the margin to move the button to the right
          }}
        >
          Ambassador
        </Button>
      </CardActions>
    </>
  );

  const cards = (
    <>
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            color: "rgb(245 158 11 / var(--tw-text-opacity, 1))",
            fontSize: 18,
          }}
        >
          ★★★★★
        </Typography>

        <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
          OTPNINJA saved me so much time and headache. No more dealing with
          sketchy verification methods. Their service is quick, efficient, and
          trustworthy.!
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Avatar Image */}
          <Avatar
            alt="Profile Image"
            src="/assets/background/wwt.jpg" // Replace with the actual path to your image
            sx={{ width: 40, height: 40, marginRight: 2 }} // Adjust the size of the avatar
          />

          {/* Typography Text */}
          <Typography variant="body2" fontWeight="bold">
            Mercedes.
            <br />
          </Typography>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            padding: "6px 12px",
            marginLeft: "16px", // Adjust the margin to move the button to the right
          }}
        >
          User
        </Button>
      </CardActions>
    </>
  );

  
  const telepop = (
    <>
        {/* Close Icon positioned at the top right */}
        <Box sx={{ position: 'relative' }}>
            <IconButton
                sx={{
                    position: 'absolute',
                    top: 1,  // Adjust the position of the icon
                    right: 5, // Adjust the position of the icon
                    color: 'gray', // Optional: Change color of close icon
                    width: 90,
                    fontWeight: 'bold',

                    fontSize: 30, // Increase font size to make the icon bigger
                }}
            >
                <CloseIcon sx={{ fontSize: 50 }} />
            </IconButton>

            <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ position: 'relative', display: 'inline-block', }}>
                        <Avatar
                            alt="Profile Image"
                            src="/assets/background/wwe.jpg" // Replace with the actual path to your image
                            sx={{
                                width: 40,
                                height: 40,
                                marginRight: 2,
                            }}
                        />
                        {/* Green Dot */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 3,
                                right: 11,
                                width: 14,

                                height: 14,
                                backgroundColor: 'green',
                                borderRadius: '50%',
                                border: '2px solid white', // Optional: adds a white border around the dot
                            }}
                        />
                    </Box>
                    <Typography variant="body2" sx={{ fontSize: '1.3rem' }} // Even bigger text
                        fontWeight="bold">

                        OTP NINJA CHAT

                    </Typography>
                </Box>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, marginLeft: 7 }}>
                    Support
                </Typography>
                <Typography sx={{ color: 'text.secondary', mb: 1.5, marginLeft: 20 }}>
                    {time} {/* Display the current time */}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                        alt="Profile Image"
                        src="/assets/background/wwe.jpg" // Replace with the actual path to your image
                        sx={{ mt: -14, width: 40, height: 40, marginRight: 3 }} // Adjust the size of the avatar
                    />
                    <Typography
                        variant="body2"
                        fontWeight="bold"
                        sx={{
                            padding: 2, // Add space inside the border
                            border: '1px solid #ddd', // Light border color
                            borderRadius: '16px', // Rounded corners
                            boxShadow: 2, // Optional: Adds a subtle shadow for the "card" effect
                            maxWidth: '80%', // Optional: Limit the width, so it's not too wide
                            marginBottom: 2, // Optional: Add some space below for separation
                        }}
                    >
                        Hello,👋 welcome to, the best SMS verification site.
                        If you have any issue or you need assistance, we are always active! What can we help you with??
                        <br />
                    </Typography>





                </Box>

            </CardContent>


            <Typography sx={{ mb: 1.5, marginLeft: 15, fontWeight: 'bold' }}>
                Start Chat with:
            </Typography>

            <CardActions>


                <Button
                    size="small"
                    variant="contained"

                    href="https://t.me/otpninja" // Replace with your Telegram link

                    sx={{
                        width: '390px', // Set the width of the button
                        backgroundColor: '#0088cc',
                        margin: '0 auto', // Centers the button horizontally
                        display: 'flex', // Use flexbox to align the content
                        alignItems: 'center', // Vertically center the content (icon and text)
                        justifyContent: 'center', // Horizontally center the content
                        padding: '6px 12px', // Optional: add some padding for spacing
                    }}
                >
                    <Icon icon="mdi:telegram" width={40} style={{ fontWeight: 'bold' }} />
                    Telegram
                </Button>
            </CardActions>
        </Box>
    </>
);

// Fixed position floating box for telepop
// eslint-disable-next-line react/no-unstable-nested-components
const FloatingTelepop = () => (

    <Box
        sx={{
            position: 'fixed', // Fixed position
            bottom: { xs: '140px', sm: '120px', md: '190px' }, // Adjust based on screen size
            right: '3px', // Adjust distance from the right side
            zIndex: 9999, // Ensure it's above other content
            borderRadius: '16px', // Optional: round the corners
            boxShadow: 3, // Optional: add shadow to make the box stand out
            width: 'auto', // You can remove this or set a specific width, like '250px' or '300px'

        }}
    >
        <Card variant="outlined" sx={{ xs: '20px', width: '360px' }}


            onClick={toggleMen}  // Toggle the menu on click
        > {/* Increase width here */}
            {telepop}
        </Card>
    </Box>
);


   // Update the time every minute (since we don't need seconds)
   React.useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000); // Update every minute (60000 ms)

    return () => clearInterval(interval); // Clean up on unmount
}, []);

// eslint-disable-next-line consistent-return
React.useEffect(() => {
    if (isMenuOpe) {
        const timer = setTimeout(() => {
            setShowTelepop(true);
        }, 6900); // Delay of 5 seconds

        // Cleanup the timer if the component unmounts or isMenuOpe changes
        return () => clearTimeout(timer);
    }
    setShowTelepop(false); // Hide if menu is not open
}, [isMenuOpe]);



const toggleMen = () => {
    setIsMenuOpe(!isMenuOpe);
};

  // Function to navigate to the Register or Login page
  const handleMenuClick = (page) => {
    if (page === "login") {
      // Navigate to the external login page
      window.location.href = "https://app.otpninja.com/login";
    } else if (page === "register") {
      // Navigate to the internal Register page
      window.location.href = "https://app.otpninja.com/register";
    }
  };


  return (
    <Box>
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

      {/* Main content */}
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "auto", px: 5, pt: 8 }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "text.primary",
            mb: 3,
            fontWeight: "bold",
            whiteSpace: "nowrap", // Prevents text from wrapping
            overflow: "hidden", // Prevents overflow
            textOverflow: "ellipsis", // Adds ellipsis if text overflows
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font sizes
          }}
        >
          Welcome to OTP NINJA
        </Typography>

        {/* Image Logo Below the Text */}
        <img
          src="/assets/background/Vector.png"
          alt="OTP NINJA Logo"
          style={{
            maxWidth: "200px",
            width: "100%",
            marginBottom: "20px",
          }}
        />

        <Typography variant="body1" sx={{ px: 2, color: "text.secondary" }}>
          Your one-stop solution for OTP generation and management.
        </Typography>
        {/* Call to Action Buttons for Login and Register */}
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 4, display: { xs: "none", md: "flex" } }}
        >
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => handleMenuClick("login")}
            sx={{
              padding: "10px 20px",
              fontWeight: 600,
              transition: "background-color 0.3s, transform 0.3s", // Adding transition for smooth effect
              "&:hover": {
                backgroundColor: theme.palette.primary.light, // Darker background on hover
                transform: "scale(1.05)", // Slight scale effect on hover
              },
            }}
          >
            Log In
          </Button>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            // eslint-disable-next-line no-return-assign
            onClick={() =>
              (window.location.href = "https://otpninja.com/register")
            } // Redirect to external URL
            sx={{
              padding: "10px 20px",
              fontWeight: 600,
              transition: "border-color 0.3s, color 0.3s, transform 0.3s", // Smooth transition on hover
              "&:hover": {
                borderColor: theme.palette.primary.dark, // Darker border on hover
                color: theme.palette.primary.dark, // Change text color to match the border
                transform: "scale(1.05)", // Slight scale effect on hover
              },
            }}
          >
            Create Account
          </Button>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 4,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            px: 3,
            height: "auto", // Ensure the Stack takes the full height of the content
          }}
        >
          {/* Text Content with Background Color */}
          <Typography
            variant="body1"
            sx={{
              px: 2, // Padding for text inside the box
              py: 1, // Vertical padding for the background box
              backgroundColor: "primary.main", // Background color like the button's primary color
              color: "white", // Text color to contrast the background
              fontWeight: "bold",
              animation: `${beat} 7s ease-in-out infinite`,

              borderRadius: 2, // Rounded corners for the background
              zIndex: 1, // Text should stay on top of the background
              marginTop: "16px", // Add margin to move it down a little
            }}
          >
            <Link
              to="https://otpninja.com/register"
              style={{
                textDecoration: "none",
                color: "white",
                mb: { xs: 8, md: 10 },
              }}
            >
              Explore Our Feautures
            </Link>
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{
            mt: 9,
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            px: 5,
            width: {
              xs: "127%", // 134% width on small screens (xs)
              md: "100%", // 100% width on medium screens and larger
              lg: "100%", // 100% width on large screens
            },
            backgroundColor: "transparent", // Transparent background
            backdropFilter: "none", // Ensure no blur effect or glass effect
            boxShadow: "none", // Remove any shadows or unwanted visual effects
          }}
        >
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              justifyContent: "space-evenly",
              maxWidth: "800px",
              width: "100%",
              animation: `${moveLeftToRight} 2s ease-out`,
              backgroundColor: "transparent", // Ensure no background color
              backdropFilter: "none", // Remove any potential backdrop filters
              boxShadow: "none", // Remove any shadows
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{
                width: "120%",
                justifyContent: "center",
                flexDirection: {
                  xs: "row", // Side by side on mobile
                  sm: "row", // Side by side on small screens
                  md: "row", // Ensure row on medium screens and larger
                },
                backgroundColor: "transparent", // No background color
                backdropFilter: "none", // Remove blur effects
                boxShadow: "none", // Ensure no shadows are applied
              }}
            >
              {/* Image 1 */}
              <Grid item xs={3} sm={3} md={4}>
                <Box
                  sx={{
                    maxWidth: 200,
                    width: "130%",
                    height: "auto",
                    transition: "transform 0.3s, opacity 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      opacity: 0.9,
                    },
                    "@media (max-width: 600px)": {
                      maxWidth: "690px", // Larger image on mobile
                    },
                    backgroundColor: "transparent", // Ensure no background color here
                    backdropFilter: "none", // Remove glass effect or blur
                  }}
                >
                  <img
                    src="/assets/background/tele.jpg"
                    alt="Custom Logo"
                    style={{
                      width: "130%",
                      borderRadius: "8px",
                    }}
                  />
                  {/* Text container */}
                  <Box
                    sx={{
                      display: {
                        xs: "none",
                        sm: "block",
                      },
                      color: "grey",
                      mt: 2,
                      fontWeight: "bold",
                    }}
                  >
                    Your one-time verification code is{" "}
                    <span style={{ color: "black" }}>456-123</span>
                  </Box>
                </Box>
              </Grid>

              {/* Image 2 */}
              <Grid item xs={4} sm={4} md={4}>
                <Box
                  sx={{
                    maxWidth: 200,
                    width: "130%",
                    height: "auto",
                    transition: "transform 0.3s, opacity 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      opacity: 0.9,
                    },
                    "@media (max-width: 600px)": {
                      maxWidth: "300px", // Larger image on mobile
                    },
                    backgroundColor: "transparent", // No background color
                    backdropFilter: "none", // Remove blur effect
                  }}
                >
                  <img
                    src="/assets/background/cc.jpg"
                    alt="Custom Logo"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>

              {/* Image 3 */}
              <Grid item xs={4} sm={4} md={4}>
                <Box
                  sx={{
                    maxWidth: 200,
                    width: "130%",
                    height: "auto",
                    transition: "transform 0.3s, opacity 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      opacity: 0.9,
                    },
                    "@media (max-width: 600px)": {
                      maxWidth: "300px", // Larger image on mobile
                    },
                    backgroundColor: "transparent", // No background color
                    backdropFilter: "none", // Remove blur effect
                  }}
                >
                  <img
                    src="/assets/background/pree.jpg"
                    alt="Custom Logo"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </ButtonGroup>
        </Stack>

        <Typography
          variant="body1"
          sx={{ px: 5, pt: 8, color: "text.secondary" }}
        >
          <span style={{ color: "rgba(3, 105, 161)", fontWeight: "bold" }}>
            Why OTP Ninja
          </span>
        </Typography>

        {/* Image Logo Below the Text */}
        <img
          src="/assets/background/your-icon.svg"
          alt="OTP NINJA Logo"
          style={{
            maxWidth: "200px",
            width: "100%",
            marginBottom: "20px",
          }}
        />

        <Grid
          container
          spacing={2}
          sx={{ mt: 3, pl: { xs: 0, sm: 0, md: 20 } }}
        >
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                // Move the component up only on mobile screens (max-width: 600px)
                "@media (max-width: 600px)": {
                  marginTop: "-50px", // Adjust this value as needed for mobile
                },
              }}
            >
              {/* Image Logo */}
              <img
                src="/assets/background/Icon.png"
                alt="OTP NINJA Logo"
                style={{
                  maxWidth: "75px",
                  width: "30%",
                  marginBottom: "5px",
                  marginTop: "-60px", // You can also tweak this if needed on mobile
                }}
              />

              <Grid container direction="column" spacing={2}>
                {/* Main content goes here */}
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      pl: { xs: 1, sm: 3, md: 3 },
                      "@media (max-width: 600px)": {
                        // Targeting mobile
                        marginTop: "37px", // Move the text down a little on mobile if needed
                      },
                    }}
                  >
                    Reliable Protection
                  </Typography>
                </Grid>

                <Grid item>
                  <Box sx={{ p: 2, borderRadius: 1, mt: 1 }}>
                    <Typography
                      sx={{
                        display: "block",
                        "@media (min-width: 1200px)": {
                          width: "70%",
                          whiteSpace: "normal",
                        },
                        "@media (max-width: 1199px)": {
                          width: "130%",
                          marginLeft: "-4px",

                          marginTop: "-28px", // Adjust this value as needed for mobile
                        },
                      }}
                    >
                      Our SMS verification with one-time use non-VoIP phone
                      numbers ensure your online accounts stay safe.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                // Move the component up only on mobile screens (max-width: 600px)
                "@media (max-width: 600px)": {
                  marginTop: "-50px", // Adjust this value as needed for mobile
                },
              }}
            >
              {/* Image Logo */}
              <img
                src="/assets/background/Ico.png"
                alt="OTP NINJA Logo"
                style={{
                  maxWidth: "75px",
                  width: "30%",
                  marginBottom: "5px",
                  marginTop: "-60px", // You can also tweak this if needed on mobile
                }}
              />

              <Grid container direction="column" spacing={2}>
                {/* Main content goes here */}
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      pl: { xs: 1, sm: 3, md: 3 },
                      "@media (max-width: 600px)": {
                        // Targeting mobile
                        marginTop: "20px", // Move the text down a little on mobile if needed
                      },
                    }}
                  >
                    Versatile Compatibility
                  </Typography>
                </Grid>

                <Grid item>
                  <Box sx={{ p: 2, borderRadius: 1, mt: 1 }}>
                    <Typography
                      sx={{
                        display: "block",
                        "@media (min-width: 1200px)": {
                          width: "70%",
                          whiteSpace: "normal",
                        },
                        "@media (max-width: 1199px)": {
                          width: "130%",
                          marginLeft: "-4px",

                          marginTop: "-28px", // Adjust this value as needed for mobile
                        },
                      }}
                    >
                      OTP Ninja adapts to various platforms effortlessly,
                      ensuring compatibility and ease of use for all users
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                // Move the component up only on mobile screens (max-width: 600px)
                "@media (max-width: 600px)": {
                  marginTop: "-50px", // Adjust this value as needed for mobile
                },
              }}
            >
              {/* Image Logo */}
              <img
                src="/assets/background/Icons.png"
                alt="OTP NINJA Logo"
                style={{
                  maxWidth: "75px",
                  width: "30%",
                  marginBottom: "5px",
                  marginTop: "-60px", // You can also tweak this if needed on mobile
                }}
              />

              <Grid container direction="column" spacing={2}>
                {/* Main content goes here */}
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      pl: { xs: 1, sm: 3, md: 3 },
                      "@media (max-width: 600px)": {
                        // Targeting mobile
                        marginTop: "37px", // Move the text down a little on mobile if needed
                      },
                    }}
                  >
                    Lightning-Fast Verification
                  </Typography>
                </Grid>

                <Grid item>
                  <Box sx={{ p: 2, borderRadius: 1, mt: 1 }}>
                    <Typography
                      sx={{
                        display: "block",
                        "@media (min-width: 1200px)": {
                          width: "70%",
                          whiteSpace: "normal",
                        },
                        "@media (max-width: 1199px)": {
                          width: "130%",
                          marginLeft: "-4px",

                          marginTop: "-28px", // Adjust this value as needed for mobile
                        },
                      }}
                    >
                      OTP Ninja offers rapid SMS service, streamlining your
                      verification process without sacrificing security.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={6}>
            <Box
              sx={{
                p: 2,
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                // Move the component up only on mobile screens (max-width: 600px)
                "@media (max-width: 600px)": {
                  marginTop: "-50px", // Adjust this value as needed for mobile
                },
              }}
            >
              {/* Image Logo */}
              <img
                src="/assets/background/Ic.png"
                alt="OTP NINJA Logo"
                style={{
                  maxWidth: "75px",
                  width: "30%",
                  marginBottom: "5px",
                  marginTop: "-60px", // You can also tweak this if needed on mobile
                }}
              />

              <Grid container direction="column" spacing={2}>
                {/* Main content goes here */}
                <Grid item>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      pl: { xs: 1, sm: 3, md: 3 },
                      "@media (max-width: 600px)": {
                        // Targeting mobile
                        marginTop: "37px", // Move the text down a little on mobile if needed
                      },
                    }}
                  >
                    Dedicated Support
                  </Typography>
                </Grid>

                <Grid item>
                  <Box sx={{ p: 2, borderRadius: 1, mt: 1 }}>
                    <Typography
                      sx={{
                        display: "block",
                        "@media (min-width: 1200px)": {
                          width: "70%",
                          whiteSpace: "normal",
                        },
                        "@media (max-width: 1199px)": {
                          width: "130%",
                          marginLeft: "-4px",

                          marginTop: "-28px", // Adjust this value as needed for mobile
                        },
                      }}
                    >
                      OTP Ninja provides dedicated assistance for any questions
                      or concerns, ensuring a hassle-free experience.
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="h3"
          sx={{
            color: "text.primary",
            mb: { xs: 5, md: 10 }, // Smaller margin on xs, larger margin on md and up
            fontWeight: "bold",
          }}
        >
          Ready to buy a number?
        </Typography>

        {/* Image Logo Below the Text */}
        <img
          src="/assets/background/your-icon.svg"
          alt="OTP NINJA Logo"
          style={{
            maxWidth: "200px",
            width: "100%",
            marginBottom: "15px",
          }}
        />

        <Typography
          variant="body1"
          sx={{
            px: 4,
            color: "text.secondary",
            fontWeight: "bold",
            mb: { xs: 3, md: 10 },
          }}
        >
          Simplify your verification process with OTPNinja quality numbers. Get
          started now for hassle-free account Security.
        </Typography>

        <Typography
          variant="body1"
          sx={{
            px: 2, // Padding for text inside the box
            py: 1, // Vertical padding for the background box
            backgroundColor: "primary.main", // Background color like the button's primary color
            color: "white", // Text color to contrast the background
            fontWeight: "bold",
            animation: `${beat} 7s ease-in-out infinite`,

            borderRadius: 2, // Rounded corners for the background
            zIndex: 1, // Text should stay on top of the background
            marginTop: "16px", // Add margin to move it down a little
          }}
        >
          <Link
            to="https://otpninja.com/register"
            style={{
              textDecoration: "none",
              color: "white",
              mb: { xs: 8, md: 10 },
            }}
          >
            Get Started Now
          </Link>
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: "text.primary",
            mb: 3,
            fontWeight: "bold",
            mt: { xs: 7, sm: 7, md: 9 },
            transform: { xs: "translateX(22px)", sm: "none" }, // Move to the left on mobile, no change on larger screens
          }}
        >
          What our users say About Us!
        </Typography>
        <Grid
          container
          spacing={3}
          sx={{
            mt: { xs: 7, sm: 7, md: 9 },
            flexDirection: { sm: "row" }, // Stack vertically on mobile (xs), horizontally on larger screens (sm and above)
            justifyContent: "center", // Center the cards on larger screens
          }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            md={6}
            lg={3.5}
            xl={3}
            sx={{
              ml: { xs: "-29px", sm: 0 }, // Move to the left a little on mobile (xs), reset on larger screens
            }}
          >
            <Box
              sx={{
                minWidth: 317,
                width: "100%", // Take full width of its parent container
              }}
            >
              <Card variant="outlined">{card}</Card>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={7}
            md={6}
            lg={3.5}
            xl={3}
            sx={{
              ml: { xs: "-29px", sm: 0 }, // Move to the left a little on mobile (xs), reset on larger screens
            }}
          >
            <Box
              sx={{
                minWidth: 317,
                width: "100%",
              }}
            >
              <Card variant="outlined">{cards}</Card>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={7}
            md={6}
            lg={3.5}
            xl={3}
            sx={{
              ml: { xs: "-29px", sm: 0 }, // Move to the left a little on mobile (xs), reset on larger screens
            }}
          >
            <Box
              sx={{
                minWidth: 317,
                width: "100%",
              }}
            >
              <Card variant="outlined">{cars}</Card>
            </Box>
          </Grid>

          {/* Add more Grid items as needed */}
        </Grid>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Stack items in a column on xs, row on md and up
            justifyContent: { xs: "center", md: "space-between" }, // Center on xs, space-between on md
            alignItems: "center", // Vertically center items on xs, align items left/right on larger screens
            fontWeight: "bold",
            width: "100%",

            mt: { xs: 7, sm: 7, md: 15 },
            p: 1,
            borderTop: "1px solid #ccc",
            backgroundColor: "#f9f9f9",
            gap: { xs: 2, md: 5 }, // Spacing between items
          }}
        >
          {/* Logo */}
          <Logo
            sx={{
              order: { xs: 0, md: 0 }, // Ensure logo comes first on mobile (xs), later on larger screens
              mb: { xs: -2, md: -10 }, // Add margin bottom on mobile to create spacing between logo and text
            }}
          />

          {/* Text Items in a Row on Medium Screens and Larger */}
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
            <Link to="/terms" style={{ textDecoration: "none" }}>
              <Box style={{ textDecoration: "none" }}>Terms of Service</Box>
            </Link>
          </Box>

         {/* Text Items in Column on Small Screens */}
            <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        gap: 2,
                        flexDirection: 'row',
                        textAlign: 'center',
                        mt: 3, // Adjust this value to move the Box up
                    }}
                >
                    <Link to="/about" style={{ textDecoration: 'none' }}>

                        <Box sx={{ textDecoration: 'none', mt: -5 }}>About</Box>

                    </Link>
                    <Link to="/private" style={{ textDecoration: 'none' }}>

                        <Box sx={{ textDecoration: 'none', mt: -5 }}>Privacy Policy</Box>

                    </Link>
                    <Link to="/terms" style={{ textDecoration: 'none' }}>

                        <Box sx={{ textDecoration: 'none', mt: -5 }}>Terms of Service</Box>

                    </Link>
                </Box>

          {/* © 2024 Otp Ninja with better font styling */}
          <Box
            sx={{
              display: { xs: "flex", md: "block" }, // Flex on smaller screens, block on larger screens
              flexDirection: { xs: "row", md: "initial" }, // Row on small screens, default block behavior on larger
              width: { xs: "auto", md: "13%" }, // Auto width on small screens, 13% on larger
              justifyContent: { xs: "center", md: "initial" }, // Center on small screens, default justify on larger
              alignItems: { xs: "center", md: "initial" }, // Center text on small screens, default align on larger
              fontWeight: "700", // Make the font bold
              fontSize: { xs: "0.875rem", md: "1rem" }, // Responsive font size
              letterSpacing: "0.5px", // Letter spacing for better readability
              lineHeight: "1.5", // Adjust line height for better spacing
            }}
          >
            © 2024 Otp Ninja
          </Box>
        </Box>
      </Stack>
      
            {/* Conditionally render the FloatingTelepop component */}
            {isMenuOpe && showTelepop && <FloatingTelepop />}



            {/* Include the Telegram Icon at the bottom */}
            <TelegramIcon />

    </Box>
    
  );
  
}


export default App;
