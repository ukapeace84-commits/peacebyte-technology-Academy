import { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <Box sx={{ py: 8, backgroundColor: '#2d6a4f', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0A3A2A', mb: 3, textAlign: 'center' }}>
            Login to Your Academy Account
          </Typography>
          
          <Box component="form" onSubmit={handleLogin} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
            <TextField
              label="Username / Email Address"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
              type="submit" 
              variant="contained" 
              size="large"
              sx={{ backgroundColor: '#0A3A2A', '&:hover': { backgroundColor: '#14533d' }, py: 1.5 }}
            >
              Sign In
            </Button>
          </Box>

          <Box sx={{ mt: 3, textAlign: 'center', display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">
              <Link to="/forgot-password" style={{ color: '#2d6a4f', textDecoration: 'none' }}>Forgot Password?</Link>
            </Typography>
            <Typography variant="body2">
              Don't have an account? <Link to="/register" style={{ color: '#2d6a4f', fontWeight: 'bold', textDecoration: 'none' }}>Register Now</Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default Login;