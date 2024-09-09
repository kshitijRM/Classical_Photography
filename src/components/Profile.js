import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { orange, grey } from "@mui/material/colors";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { IconButton, TextField, FormControl, Grid } from "@mui/material";
import Footer from "./footer";
import Navbar from "./Navbar";

function ProfilePage({ darkMode, toggleDarkMode }) {
  return (
    <div className="conatiner">
      <Navbar />
        <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar
            alt="User Profile"
            src="https://c1.wallpaperflare.com/preview/78/669/177/leica-camera-photography-film-retro-lens.jpg"
            sx={{
              width: 120,
              height: 120,
              border: `2px solid ${darkMode ? "white" : "black"}`,
              mb: 2,
            }}
          />
          <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
            User Profile
          </Typography>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <TextField
              id="name"
              label=""
              variant="outlined"
              value={"Classical Photography"}
              color={darkMode ? "secondary" : "primary"}
              sx={{ mb: 2 }}
            />
            <TextField
              id="address"
              label=""
              variant="outlined"
              value={"Indi, Vijayapur 586209"}
              color={darkMode ? "secondary" : "primary"}
              sx={{ mb: 2 }}
            />
            <TextField
              id="phoneNumber"
              label=""
              value={"8310051418"}
              variant="outlined"
              color={darkMode ? "secondary" : "primary"}
              sx={{ mb: 2 }}
            />
            <TextField
              id="email"
              label=""
              variant="outlined"
              value={"classicalphotograpy@gamil.com"}
              color={darkMode ? "secondary" : "primary"}
              sx={{ mb: 2 }}
            />
          </FormControl>
          <Button variant="contained" color="primary" component={Link} to="../">
            Save
          </Button>
        </Box>
      </Container><br></br><br></br>
      <Footer />
    </div>
  );
}

export default ProfilePage;
