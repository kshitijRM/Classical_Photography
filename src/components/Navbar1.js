import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import ScheduleIcon from '@mui/icons-material/Schedule';
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { orange, grey } from "@mui/material/colors";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { FaCamera } from "react-icons/fa";
import "./Navbar.css";

const pages = [
  "Home",
  "About Us",
  "Services",
  "Contact Us",
  "Gallery",
  "Booking",
];
const settings = ["Profile", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };



  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: darkMode ? grey[900] : orange[500] }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <img
              src="https://th.bing.com/th/id/R.77ecfbf501bc6dc30bbd774ab92c5ed1?rik=TL2pXEAV8UNS%2fQ&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f522b5dc4e4b0e1a3bc8593ae%2ft%2f5eea7edf5accdf77c869fe40%2f1592426211186%2fclassical%2blogo.jpg%3fformat%3d1500w&ehk=QAi%2bGKR1dQbJmsbXYKAiQqwos%2buwAd1WW6LL3E0%2bVp0%3d&risl=&pid=ImgRaw&r=0"
              alt="Logo"
              width="70px"
              height="45px"
              style={{
                marginRight: "10px",
                border: `2px solid ${darkMode ? "white" : "black"}`,
                borderRadius: "5px",
              }}
            /> <br></br> */}
           <div>
      <h1 style={{ color: 'black', display: 'flex', alignItems: 'center' }}>
        <FaCamera style={{ marginRight: '10px' }} />
        Classical Photography
      </h1>
    </div>
            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 3000,
                color: darkMode ? "white" : "black",
                textDecoration: "none",
              }}
            >
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="black"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography
                      component={Link}
                      to={
                        page === "Home"
                          ? "/"
                          : `/${page.toLowerCase().replace(/ /g, "-")}`
                      }
                      sx={{
                        textDecoration: "none",
                        color: darkMode ? "white" : "black",
                      }}
                    >
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h6"
              noWrap
              component={Link}
              to="/"
              sx={{
                flexGrow: 2,
                display: { xs: "flex", md: "none" },
                fontFamily: "monospace",
                fontWeight: 400,
                color: darkMode ? "white" : "black",
                textDecoration: "none",
              }}
            >
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{ display: "flex", alignItems: "center" }}>
       
              <Tooltip title="Toggle dark mode">
                <IconButton
                  onClick={toggleDarkMode}
                  sx={{ color: darkMode ? "white" : "black" }}
                >
                  {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "35px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={
                      setting === "Logout" ? handleLogout : handleCloseUserMenu
                    }
                  >
                    {setting}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
