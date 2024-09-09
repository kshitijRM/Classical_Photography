import React from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { orange, blue, grey, yellow, green, brown } from "@mui/material/colors";
import Navbar from "./Navbar";
import './About.css'; // Import custom CSS for About component styling
import { Block } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Footer from "./footer";

const About = () => {
  return (
    <div className="continer">
      <Navbar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", color: orange[1000] }}>
            About Us
          </Typography>
        </Box>
        <div className="text">
          <Typography variant="body1" paragraph sx={{ color: Block[600] }}>
            Welcome to Classical Photography, where we capture the essence of life's most precious moments.
            With a passion for the art of photography, we specialize in creating timeless portraits, stunning
            maternity and newborn sessions, and capturing the candid, playful moments that families cherish.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: Block[600] }}>
            Our journey began with a simple mission: to provide our clients with the highest quality images that
            tell their unique stories. We believe that photography is more than just taking pictures; it is about
            capturing emotions, preserving memories, and creating art that will be cherished for generations.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: Block[600] }}>
            At Classical Photography, we use state-of-the-art equipment and the latest techniques to ensure that
            every image we produce is of the highest standard. Our team of professional photographers is dedicated
            to making each session enjoyable and comfortable, ensuring that you feel relaxed and natural in front
            of the camera.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: Block[600] }}>
            Whether you're looking to capture the joy of a new addition to your family, the love shared in a family
            portrait, or the individual beauty of a portrait session, we are here to help you create stunning
            imagery that reflects your personality and style.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: Block[500] }}>
            Thank you for choosing Classical Photography. We look forward to working with you and creating beautiful
            memories that you will treasure forever.
          </Typography>
        </div><br></br><br></br>
        {/* Gallery Carousel */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: Block[500], textAlign: "center", mb: 2 }}>
            Explore Our Gallery
          </Typography>
          <div className="gallery-carousel">
            {/* Carousel component or simple image grid */}
            <img src="https://images.unsplash.com/photo-1527011046414-4781f1f94f8c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Item 1" className="gallery-item" />
            <img src="https://plus.unsplash.com/premium_photo-1668383207771-dcf6e2d520f5?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Item 2" className="gallery-item" />
            <img src="https://images.unsplash.com/photo-1554844453-7ea2a562a6c8?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Item 3" className="gallery-item" />
            <img src="https://plus.unsplash.com/premium_photo-1673356713415-95a46b9ad02f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Gallery Item 4" className="gallery-item" />
          </div>
        </Box>

      </Container>
      <Footer />
    </div>
  );
}

export default About;
