import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Navbar from "./Navbar";
import Footer from "./footer";
import homepage from './homepage.css';
function Home() {
  return (
    <div className="container">
        <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4 }} >
        <h1 className="header">Welcome to Classical photography</h1>
      </Container>
      <Footer />
    </div> 
  );
}

export default Home;
