import { Container, Typography, Box, Button, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#F4F9F5', minHeight: '80vh' }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#0A3A2A', mb: 2 }}>
            About Peacebyte Technology Academy
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', maxWidth: '700px', mx: 'auto', fontSize: '1.1rem' }}>
            We are dedicated to equipping the next generation of digital leaders with high-demand tech skills, practical execution experience, and professional confidence.
          </Typography>
        </Box>

        {/* Info Cards Grid */}
        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderTop: '4px solid #4CAF50', boxShadow: 2 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0A3A2A', mb: 2 }}>
                  Our Mission
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                  To bridge the digital skills gap by providing accessible, rigorous, and hands-on technical training tailored to the modern software industry.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderTop: '4px solid #4CAF50', boxShadow: 2 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0A3A2A', mb: 2 }}>
                  Practical Learning
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                  We believe in learning by doing. Our curriculum focuses heavily on real-world projects, portfolio building, and active collaborative teamwork.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%', borderTop: '4px solid #4CAF50', boxShadow: 2 }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0A3A2A', mb: 2 }}>
                  Expert Guidance
                </Typography>
                <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.7 }}>
                  Learn directly from structured frameworks and structured milestones designed to guide you from beginner status to confident tech professional.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Back Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button 
            component={Link} 
            to="/" 
            variant="contained" 
            sx={{ backgroundColor: '#0A3A2A', '&:hover': { backgroundColor: '#07281c' }, px: 4, py: 1.5 }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default About;