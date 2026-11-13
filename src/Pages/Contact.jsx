import { Container, Typography, Box, Grid, Card, CardContent } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact() {
  return (
    <Box 
      sx={{ 
        py: 10, 
        backgroundColor: '#28a745', 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center',
        background: 'linear-gradient(135deg, #1e7e34 0%, #28a745 100%)' // Smooth, professional green gradient backdrop
      }}
    >
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800, 
              color: '#FFFFFF', 
              mb: 2,
              letterSpacing: '0.5px',
              textShadow: '0px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            Get In Touch With Us
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#F1F8F5', 
              maxWidth: '650px', 
              mx: 'auto', 
              fontSize: '1.15rem',
              lineHeight: 1.6
            }}
          >
            Have questions about our courses, programs, or ready to start your tech journey? Reach out to our support team today!
          </Typography>
        </Box>

        {/* Contact Cards Grid */}
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          
          {/* Location Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={6}
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 4, 
                borderRadius: 4, 
                backgroundColor: '#FFFFFF',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '0 !important' }}>
                <Box 
                  sx={{ 
                    backgroundColor: '#e8f5e9', 
                    borderRadius: '50%', 
                    p: 2.5, 
                    mb: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 40, color: '#28a745' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#111' }}>
                  Our Location
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.5 }}>
                  Owerri, Imo State, Nigeria
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Email Us Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={6}
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 4, 
                borderRadius: 4, 
                backgroundColor: '#FFFFFF',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '0 !important' }}>
                <Box 
                  sx={{ 
                    backgroundColor: '#e8f5e9', 
                    borderRadius: '50%', 
                    p: 2.5, 
                    mb: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <EmailIcon sx={{ fontSize: 40, color: '#28a745' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#111' }}>
                  Email Address
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.5, wordBreak: 'break-word' }}>
                  support@peacebytetechnologyacademy.com
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Call Us Card */}
          <Grid item xs={12} sm={6} md={4}>
            <Card 
              elevation={6}
              sx={{ 
                height: '100%', 
                textAlign: 'center', 
                p: 4, 
                borderRadius: 4, 
                backgroundColor: '#FFFFFF',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.15)'
                }
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: '0 !important' }}>
                <Box 
                  sx={{ 
                    backgroundColor: '#e8f5e9', 
                    borderRadius: '50%', 
                    p: 2.5, 
                    mb: 2.5,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 40, color: '#28a745' }} />
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: '#111' }}>
                  Phone Support
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.5 }}>
                  +234 (Enabled for Support)
                </Typography>
              </CardContent>
            </Card>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;