import { Link } from 'react-router-dom';
import { Container, Typography, Box, Grid, Card, CardContent, Button } from '@mui/material';

function Courses() {
  const courseList = [
    { title: "Web Design", desc: "Master modern frontend development using React, Vite, and Material-UI to build responsive web apps." },
    { title: "Data Analysis", desc: "Learn data audits, summary metrics, and reporting dashboards using advanced spreadsheets and analytics tools." },
    { title: "AI & Automation", desc: "Explore intelligent automated workflows, prompt design patterns, and modern AI integration frameworks." },
    { title: "UI/UX Design", desc: "Design user-centered digital interfaces, wireframes, and high-impact layouts focused on user experience." }
  ];

  return (
    <Box sx={{ minHeight: '80vh', backgroundColor: '#F4F9F5', py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#0A3A2A', mb: 2 }}>
            Our Courses
          </Typography>
          <Typography variant="body1" sx={{ color: '#4E6E5D', fontSize: '1.1rem' }}>
            Explore the professional digital skills you can learn with us.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {courseList.map((course, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderTop: '4px solid #4CAF50', boxShadow: 3 }}>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#0A3A2A', mb: 2 }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#555', lineHeight: 1.6 }}>
                    {course.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            component={Link} 
            to="/" 
            variant="contained" 
            sx={{ 
              backgroundColor: '#0A3A2A', 
              color: '#FFFFFF', 
              px: 4, 
              py: 1.5,
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#145339' } 
            }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Courses;