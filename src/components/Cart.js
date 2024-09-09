import React, { useState } from "react";
import "./Cart.css"; // Import external CSS file
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import ShoppingCartIcon from Material-UI Icons
import FavoriteIcon from "@mui/icons-material/Favorite"; // Import FavoriteIcon for 'Likes' functionality
import { Button, TextField } from "@mui/material"; // Import Button and TextField from Material-UI
import Navbar from "./Navbar";
import Footer from "./footer";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import shopLogo from './logo.png'
const Cart = () => {
  // Initialize state for cart items and message
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Portraits",
      price: 500,
      quantity: 1,
      likes: 0,
      liked: false,
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0RQZmVIqyzVzcAArVwu1SmaH0V5Np2N6kmdzHgcvgwF_gdxbn27Y19-8SpY-gZKNnYksLEZ57S96KcaUr7ZMZRb0c5x0pYxQ1dcYIrPWB4p-IbkYbzRZ2&usqp=CAE",
      comment: "",
    },
    {
      id: 2,
      name: "Weddings shoot",
      price: 50000,
      quantity: 1,
      likes: 0,
      liked: false,
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTewr4gYoG9FCY0yNWqBVNc1tpK6ecdQJszfBNNnarNGBzloZbV2CK4acTDFqW9TPQmXS6gW-W2tAsKVNuYtLD31oSmgBmIKcYCrRG--I6S&usqp=CAE",
      comment: "",
    },
    {
      id: 5,
      name: "Fashions",
      price: 5000,
      quantity: 4,
      likes: 0,
      liked: false,
      image:
        "https://m.media-amazon.com/images/I/71Y606TYDgL._SY879_.jpg",
      comment: "",
    },
    {
      id: 6,
      name: "Family",
      price: 1500,
      quantity: 1,
      likes: 0,
      liked: false,
      image:
        "https://m.media-amazon.com/images/I/71t+wWJCnRL._SX679_.jpg",
      comment: "",
    },
  ]);
  const [message, setMessage] = useState("");

  // Function to remove item from cart
  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
    setMessage("Item removed from cart.");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  // Function to update item quantity
  const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    setMessage("Quantity updated.");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  // Function to increment item likes
  const incrementLikes = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id && !item.liked
        ? { ...item, likes: item.likes + 1, liked: true }
        : item.id === id && item.liked
        ? { ...item, likes: item.likes - 1, liked: false }
        : item
    );
    setCartItems(updatedCartItems);
    setMessage("You toggled your like!");
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  // Function to update item comment
  const updateComment = (id, newComment) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, comment: newComment } : item
    );
    setCartItems(updatedCartItems);
  };

  // Function to handle comment submission
  const handleCommentSubmit = (id) => {
    setMessage(`Comment for item ${id} submitted!`);
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  // Function to calculate total price of items in cart
  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    const shopName = "Classical Photography";
    const shopContact = "Contact: +91 8971921234";
    const shopAddress = "Classical Photography Bagalkota Road, Vijayapur 586101";
    const pageTitle = "Invoice";
    const tableHeaders = ["Name", "Price", "Quantity", "Total"];

    // Add shop logo
    const imgData = shopLogo; // Replace with your image source
    doc.addImage(imgData, "PNG", 10, 10, 40, 40);

    // Set shop name and contact details
    doc.setFontSize(14);
    doc.text(shopName, 60, 25);
    doc.setFontSize(10);
    doc.text(shopContact, 60, 30);
    doc.setFontSize(10);
    doc.text(shopAddress, 60, 35);


    // Add page title
    doc.setFontSize(18);
    doc.text(pageTitle, 10, 60);

    // Generate table data
    const tableData = cartItems.map((item) => [
      item.name,
      item.price.toFixed(2),
      item.quantity,
      (item.price * item.quantity).toFixed(2),
    ]);

    // Set table position and styling
    doc.autoTable({
      startY: 70,
      head: [tableHeaders],
      body: tableData,
    });

    // Add total
    const finalY = doc.lastAutoTable.finalY + 10;
    doc.text(`Total: ₹${calculateTotal().toFixed(2)}`, 10, finalY);

    // Save PDF
    doc.save("invoice.pdf");
  };


  // Placeholder function for handling checkout
  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "https://your-salesforce-instance-url/api/orders",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer your_access_token",
          },
          body: JSON.stringify({
            items: cartItems,
            total: calculateTotal(),
            // Other order details as needed
          }),
        }
      );
      if (response.ok) {
        setMessage("Order placed successfully!");
        setCartItems([]); // Clear cart after successful order
      } else {
        setMessage("Failed to place order.");
      }
    } catch (error) {
      setMessage("Error: " + error.message);
    }
    setTimeout(() => setMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="order-page">
      <Navbar />
      <div className="cart-container">
        <div className="cart-header">
          <h1>
            <ShoppingCartIcon /> Orders
          </h1>
          {message && <div className="cart-message">{message}</div>}
        </div>
        {cartItems.length === 0 ? (
          <p>No Orders</p>
        ) : (
          <>
            <div className="cart-grid">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="order-item">
                    {/* Displaying product image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                    />
                    <p>{item.name}</p>
                    <p>Price: ₹{item.price.toFixed(2)}</p>
                    <p>Quantity: {item.quantity}</p>
                    <div className="like-icon">
                      <FavoriteIcon
                        onClick={() => incrementLikes(item.id)}
                        className={`like-icon ${
                          item.liked ? "liked" : ""
                        }`}
                      />
                      <span>{item.likes}</span>
                    </div>
                    <div className="comment-section">
                      <TextField
                        label="Add a comment"
                        variant="outlined"
                        fullWidth
                        value={item.comment}
                        onChange={(e) =>
                          updateComment(item.id, e.target.value)
                        }
                      />
                      <Button
                        variant="contained"
                        className="send-button black-button" // Apply black-button class
                        onClick={() => handleCommentSubmit(item.id)}
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <p>Total: ₹{calculateTotal().toFixed(2)}</p>
              <div className="cart-checkout">
                <center>
                  <Button
                    onClick={() => {
                      handleCheckout();
                      generatePDF();
                    }}
                    variant="contained"
                    className="bill-button black-button" // Apply black-button class
                  >
                    Bill
                  </Button>
                </center>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
