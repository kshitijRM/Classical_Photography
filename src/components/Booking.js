// src/components/BookingForm.js
import React, { useState } from 'react';
import './Booking.css'; // Import your CSS file
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const BookingForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [sessionDescription, setSessionDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    setIsConfirming(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsOtpSent(true);
    alert('OTP sent to your email.');
  };

  const handleOtpSubmit = (event) => {
    event.preventDefault();
    // Mock OTP verification
    if (otp === '123456') {
      setIsOtpVerified(true);
      setSuccessMessage('Booking successful! Thank you for booking.');
      // Clear the form fields
      setName('');
      setEmail('');
      setPhone('');
      setDate('');
      setSessionType('');
      setSessionDescription('');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleOkClick = () => {
    navigate('/');
  };

  return ( <div><br></br>
    <div className="booking-form">
      <h2>Book a Session</h2>
      {!isOtpSent && !isConfirming && (
        <form onSubmit={handleConfirm}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            placeholder="Enter date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="sessionType">Session Type:</label>
          <select
            id="sessionType"
            name="sessionType"
            value={sessionType}
            onChange={(e) => setSessionType(e.target.value)}
            required
          >
            <option value="">Select session type</option>
            <option value="Portraits">Portraits</option>
            <option value="Weddings shoot">Weddings shoot</option>
            <option value="Birthday party">Birthday party</option>
            <option value="Marriage shoot">Festival shoot</option>
            <option value="Fashions">Fashions</option>
            <option value="Family">Family</option>
            <option value="Maternity Clothing">Maternity Shoot</option>
            <option value="Stylish Portrait">Stylish Portrait</option>
          </select>

          <label htmlFor="sessionDescription">Address:</label>
          <textarea
            id="sessionDescription"
            name="sessionDescription"
            rows="4"
            placeholder="Enter Address"
            value={sessionDescription}
            onChange={(e) => setSessionDescription(e.target.value)}
            required
          ></textarea>
          <button type="submit">Confirm Booking</button>
        </form>
      )}
      {isConfirming && !isOtpSent && (
        <div className="confirmation">
          <h3>Confirm Your Booking</h3>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone Number:</strong> {phone}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Session Type:</strong> {sessionType}</p>
          <p><strong>Session Address:</strong> {sessionDescription}</p>
          <button onClick={handleSubmit}>Send OTP</button>
        </div>
      )}
      {isOtpSent && (
        <form onSubmit={handleOtpSubmit}>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            name="otp"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}
      {isOtpVerified && (
        <div>
          <p>{successMessage}</p>
          <button onClick={handleOkClick}>OK</button>
        </div>
      )}
    </div>
    </div>
  );
};

const Booking = () => {
  return (
    <div>
      <Navbar />
      <BookingForm /><br></br><br></br><br></br>
      <Footer />
    </div>
  );
};

export default Booking;
