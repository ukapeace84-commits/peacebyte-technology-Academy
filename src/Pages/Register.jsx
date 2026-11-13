import { Container, Typography, Box, Button, TextField, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#F4F9F5', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="sm">
        <Card sx={{ p: 4, boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#0A3A2A', mb: 1, textAlign: 'center' }}>
              Create Account
            </Typography>
            <Typography variant="body2" sx={{ color: '#666', mb: 4, textAlign: 'center' }}>
              Join Peacebyte Technology Academy today
            </Typography>

            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <TextField label="Full Name" variant="outlined" fullWidth required />
              <TextField label="Email Address" variant="outlined" fullWidth required />
              <TextField label="Password" type="password" variant="outlined" fullWidth required />
              <Button type="submit" variant="contained" sx={{ backgroundColor: '#0A3A2A', '&:hover': { backgroundColor: '#07281c' }, py: 1.5, fontWeight: 'bold' }}>
                Register
              </Button>
            </Box>

            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Button component={Link} to="/" sx={{ color: '#4CAF50', textTransform: 'none' }}>
                Back to Home
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Register;