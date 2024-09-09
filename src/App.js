import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import MainPage from "./components/main";
import Home from "./components/Home";
import About from "./components/about";  
import Services from "./components/service";
import Contact from "./components/contact";
import Booking from './components/Booking';
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Rental from "./components/Rental";
function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />  
          <Route path="/gallery" element={<MainPage />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/order" element={<order />} />
          <Route path="/Cart" element={<Cart />} /> {/* Define the cart route */}
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Cart" element={<Cart />} /> {/* Define the cart route */}
          <Route path="/Rental" element={<Rental />} />

        </Routes> 
      </Router>
    </div>
  );
}

export default App;


