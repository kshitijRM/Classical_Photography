import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Rental.css'; // Import CSS for hover effect
import Navbar from './Navbar';
import Footer from './footer';

const rentalCars = [
  { 
    id: 1, 
    name: "Sony Alpha A7 ", 
    image: "https://ik.imagekit.io/faskf16pg/dslr-cameras/Sony-A7-III-on-rent-SharePal-1__2__fd3qo0Wb1.png?updatedAt=1681119347567", 
    price: "₹1499 / day", 
    description: "Sony Alpha A7 IV Mirrorless Camera with 28-70mm Lens Kit (ILCE-7M4K).",
  },
  { 
    id: 2, 
    name: "Nikon D7500", 
    image: "https://ik.imagekit.io/faskf16pg/sub_category/Cameras/DSLR_Cameras/Nikon-D7500-on-rent-SharePal-1_-DRQZOsb51.png?", 
    price: "₹999 / day", 
    description: "Sony Alpha ILCE 6100L Mirrorless DSLR Camera with 16-50mm Lens.",
  },
  { 
    id: 3, 
    name: "Panasonic Lumix ", 
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTCpfr0wjQkQnTf0D0ZnweEZA5eY3oRxyXoZweQferTrZB1l1HaQj15a8r-eQ3IIkAwnVDU6ZQTP9sglXrp9d2i2ZlQamxt7_7kdtjH1dglAqIjWNlGSCRLW9I&usqp=CAE", 
    price: "₹1199 / day", 
    description: "Panasonic LUMIX S9 Mirrorless Camera with 20-60mm F3.5-5.6 Lens DC-S9K.",
  },
  { 
    id: 4, 
    name: "Nikon D5600 DSLR ", 
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT0kTT4zCBMazVe-YFT0KZKk7DJygoIxIAyhsBNXbrBvxffVWwxWBg8cdugYzvDdwldrSo-5mjKcWSvx6ysdAsGilU1DgwHqkePUBT1n6OgTCZNG2lMAm0BFA&usqp=CAE", 
    price: "₹899 / day", 
    description: "Nikon D5600 with AF-P 18-55 mm + AF-P 70-300 mm VR Kit, 3X Optical Zoom, Black."
  },
  { 
    id: 5, 
    name: "Sony Alpha ILCE-6100Y ", 
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQXd8TgKFrZcxmZY-l_cQzJib1o5Zg-NlnU4bP3iX97lnDCguaUzn3lOCYlALGl6tug6ItuoKOV7KMGX32b1JJ3Ecrhj40ma3b_D6WGGciTBV_DRQn1RrR8iA&usqp=CAE", 
    price: "₹1800 / day", 
    description: "Sony Alpha ILCE-6100Y 24.2 MP Mirrorless Digital SLR Camera with 16-50 mm and 55-210 mm Zoom Lenses.",
  },
  { 
    id: 6, 
    name: "Canon 5D MARK IV DSLR camera", 
    image: "https://i.pinimg.com/originals/6c/d5/03/6cd5036299cccc406cd05cf139fa9f88.jpg", 
    price: "₹3099 / day", 
    description: "Used Canon EOS 5D Mark IV 30.4 Mp Camera with 24-105mm is II USM Lens CMOS · With Video.",
  },
  { 
    id: 7, 
    name: "UHD 4k Video Camera ", 
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7QdzUzexGHoyI_p0NSI4MDNk_W8Q-5i5T2dOSiAmKmekV8TpnJXKKjcUddKgk0F9i-lMOn97ai7-cmnhNv33hJnwDPXm9k0EaM43Tn3Tj6owyrjehMNEc&usqp=CAE", 
    price: "₹2599 / day",
    description: "4k Video Camera Camcorder With 18x Digital Zoom 64mp Digital Camera High Definition · 4K.",
  },
  { 
    id: 8, 
    name: "DJI Phantom 3  Drone Camera", 
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRysOYVQAYXfUEsA9x7kGwzByGbH3l-NiPODKXyPeDtyvjrCRD7I3s33743q7q_rbZ9nfrrvhIzrgRTGGDH3Pg7xh-wMgY24BgTGM2EP8QpMnxVjC_GVC89AQ&usqp=CAE", 
    price: "₹2099 / day", 
    description: "Digital Camera Pixel: 16 MP,4K Full HD Brand: DJI Body Material: Carbon Fiber Controlling Range: 8 Km.",
  },
  // Other camera objects
];

function handleRent(name){
  alert("Booked");
}

function Rental() {
  return (
    <div>
      <Navbar />
      <div className='body'>
        <Container className="mt-4 mb-4">
          <Typography variant="h4" component="h1" gutterBottom>
            <center>Camera Rent</center>
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {rentalCars.map((car) => (
              <Grid item key={car.id} xs={12} sm={6} md={3}>
                <Box className="card-container">
                  <Card
                    sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                    className="hover-card"
                  >
                    <CardMedia
                      component="img"
                      height="250"
                      image={car.image}
                      alt={car.name}
                      className="card-media"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="div">
                        {car.name}
                      </Typography>
                      <Typography variant="h6" color="textSecondary">
                        {car.price}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {car.description}
                      </Typography>
                      <Button variant="contained" className="rent-button" onClick={handleRent}>
                        Rent Now
                      </Button>
                    </CardContent>
                  </Card>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </div>
  );
}

export default Rental;
