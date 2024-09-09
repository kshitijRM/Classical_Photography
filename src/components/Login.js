import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import CircularProgress from '@mui/material/CircularProgress';
import './LoginForm.css'; // Import the CSS file
import Navbar1 from './Navbar1'
import Footer from './footer';


function LoginForm() {
  const [email, setEmail] = useState('example@gmail.com');
  const [password, setPassword] = useState('12345678');
  const [alert, setAlert] = useState({ open: false, severity: '', message: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email.trim() === '' || password.trim() === '') {
      setAlert({
        open: true,
        severity: 'error',
        message: 'Email and password cannot be empty',
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setAlert({
        open: true,
        severity: 'error',
        message: 'Please enter a valid email address',
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log('Email:', email);
      console.log('Password:', password);
      setAlert({
        open: true,
        severity: 'success',
        message: 'Login successful',
      });
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }, 2000); // Simulate an async login process
  };

  return (
    <div>< Navbar1/>
    <Container component="main" maxWidth="xs" className='container-body'>
      <Box className="container-main">
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              '& .MuiInput-underline:before': { borderBottomColor: 'orange' },
              '& .MuiInput-underline:after': { borderBottomColor: 'orange' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'orange' },
                '&:hover fieldset': { borderColor: 'orangered' },
                '&.Mui-focused fieldset': { borderColor: 'orange' },
              },
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{
              '& .MuiInput-underline:before': { borderBottomColor: 'orange' },
              '& .MuiInput-underline:after': { borderBottomColor: 'orange' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'orange' },
                '&:hover fieldset': { borderColor: 'orangered' },
                '&.Mui-focused fieldset': { borderColor: 'orange' },
              },
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="button-sign-in"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Sign In'}
          </Button>
          <Typography variant="body2" className="typography-link">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </Typography>
        </Box>
        <Collapse in={alert.open}>
          <Alert
            severity={alert.severity}
            onClose={() => setAlert({ ...alert, open: false })}
            sx={{ mt: 2 }}
          >
            {alert.message}
          </Alert>
        </Collapse>
      </Box>
    </Container><br></br><br></br><br></br>
    <Footer />
      </div>
  );
}

export default LoginForm;
