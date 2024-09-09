import React, { useState } from "react";
import Navbar from "./Navbar";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Modal,
  Box,
  IconButton,
  Rating,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import './MainPage.css'; // Import CSS for hover effect
import Footer from './footer';

// Array of items to display on the main page
const items = [
  { id: 1, name: "Portraits", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1YgCTtf-B0UBC-dIPzM46UvPj2t2sVU8fg&s", description: "High-quality portrait photography to capture your personality." },
  { id: 2, name: "Weddings shoot", image: "https://img.freepik.com/premium-photo/pakistani-wedding-couple-asian-bridal-dresses-indian-bridal-outfits-bridal-dress-design_678696-43.jpg?size=626&ext=jpg&ga=GA1.1.1660067279.1691746612&semt=ais_user", description: "Capture your special day with stunning wedding photography." },
  { id: 3, name: "Birthday party", image: "https://media.istockphoto.com/id/1502843522/photo/celebrating-a-birthday-in-the-office.jpg?s=2048x2048&w=is&k=20&c=0WBL42z7vAuTCD1OvnpPMTiRWLy4Wm2KTxvGf68nAQ8=", description: "Memorable birthday party photography for all ages." },
  { id: 4, name: "Festival shoot", image: "https://media.istockphoto.com/id/1178984568/photo/indian-couple-making-flower-rangoli-on-diwali-or-onam-festival-taking-selfie-or-holding-sweets.webp?b=1&s=170667a&w=0&k=20&c=-vaBOVaRnjUzS_LF6kY01yYBH7fycZ2kxBpwX0vt4a8=", description: "Capture the essence of Festival with beautiful photos."},
  { id: 5, name: "Fashions", image: "https://images.unsplash.com/photo-1544400541-2ce9ada3547e?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Stylish fashion photography for models and brands." },
  { id: 6, name: "Family", image: "https://media.istockphoto.com/id/1419870580/photo/portrait-of-a-happy-family.webp?b=1&s=170667a&w=0&k=20&c=MNJpBQ6j-xM0WkQq7lGiP79x9pQkWsJsqJvb2NgmJj4=", description: "Beautiful family photography to cherish forever."},
  { id: 7, name: "Maternity Clothing", image: "https://media.istockphoto.com/id/1826004189/photo/portrait-of-happy-indian-pregnant-woman-with-her-husband-and-daughter-at-home-awaiting-for.webp?b=1&s=170667a&w=0&k=20&c=eMfQjnjIbm9okGf_DltQuAHoAdY9pFVi0CUgvBU0dR4=", description: "Capture the joy of expecting mothers with maternity photography."},
  { id: 8, name: "Stylish Portrait", image: "https://images.unsplash.com/photo-1718170942750-ef613ee02feb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3R5bGlzaCUyMHBvcnRyYWl0fGVufDB8fDB8fHww", description: "Unique and stylish portraits for any occasion."},
];

function MainPage() {
  const [open, setOpen] = useState(false); // State for modal open/close
  const [selectedItem, setSelectedItem] = useState(null); // State for selected item in modal
  const [likedItems, setLikedItems] = useState({}); // State for liked items
  const [ratings, setRatings] = useState({}); // State for ratings of items

  // Function to open the modal with the selected item
  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  // Function to toggle the liked state of an item
  const handleLike = (id) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Function to handle rating of an item
  const handleRating = (id, value) => {
    setRatings((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {items.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={3}>
              <Card
                sx={{ height: "100%", display: "flex", flexDirection: "column" }}
                className="hover-card" // CSS class for hover effect
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Rating
                    name={`rating-${item.id}`}
                    value={ratings[item.id] || 0}
                    onChange={(event, newValue) => handleRating(item.id, newValue)}
                  />
                </CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", m: 2 }}>
                  <Button 
                    variant="contained" 
                    className="view-button" // Add this class for button styles
                    onClick={() => handleOpen(item)}
                  >
                    View
                  </Button>
                  <IconButton onClick={() => handleLike(item.id)} color={likedItems[item.id] ? "error" : "default"}>
                    {likedItems[item.id] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: '#e7c072', boxShadow: 24, p: 4 }}>
          {selectedItem && (
            <>
              <Typography id="modal-title" variant="h6" component="h2">
                {selectedItem.name}
              </Typography>
              <CardMedia
                component="img"
                height="250"
                image={selectedItem.image}
                alt={selectedItem.name}
              />
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedItem.description}
              </Typography>
            </>
          )}
        </Box>
      </Modal>
      <Footer/>
    </div>
  );
}

export default MainPage;
