import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
} from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const WebDevelopment = () => {
  const topics = [
    {
      title: 'HTML',
      description: 'Learn how to structure web pages and add content.',
    },
    {
      title: 'CSS',
      description: 'Style websites with colours, layouts, fonts and animations.',
    },
    {
      title: 'JavaScript',
      description: 'Make websites interactive and responsive to user actions.',
    },
    {
      title: 'React',
      description: 'Build modern websites using reusable components.',
    },
    {
      title: 'Responsive Design',
      description: 'Create websites that work on phones, tablets and computers.',
    },
    {
      title: 'Website Projects',
      description: 'Apply your skills by building practical website projects.',
    },
  ];

  const outcomes = [
    'Build and design websites from scratch.',
    'Create responsive pages for different devices.',
    'Work with HTML, CSS and JavaScript.',
    'Build user interfaces with React.',
    'Develop projects for your portfolio.',
  ];

  return (
    <Box sx={{ backgroundColor: '#F5F8F5', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>

        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBack />}
          sx={{
            color: '#173C2D',
            mb: 3,
            textTransform: 'none',
            fontWeight: 700,
          }}
        >
          Back to Home
        </Button>

        {/* COURSE HERO */}
        <Box
          sx={{
            backgroundColor: '#173C2D',
            borderRadius: 4,
            p: { xs: 3, md: 7 },
            color: '#FFFFFF',
          }}
        >
          <Typography
            sx={{ color: '#B7E4C7', fontWeight: 800, mb: 2 }}
          >
            PEACEBYTES TECHNOLOGY
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: 34, md: 52 },
              mb: 3,
            }}
          >
            Web Development
          </Typography>

          <Typography
            sx={{
              color: '#E4F2E8',
              fontSize: 17,
              lineHeight: 1.9,
              maxWidth: 750,
              mb: 4,
            }}
          >
            Discover how websites are planned, designed and built.
            Learn the technologies behind the web and develop practical
            skills to create your own websites and web applications.
          </Typography>

          <Button
            href="#registration"
            variant="contained"
            sx={{
              backgroundColor: '#B7E4C7',
              color: '#173C2D',
              px: 4,
              py: 1.5,
              fontWeight: 800,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#FFFFFF' },
            }}
          >
            Register Now
          </Button>
        </Box>

        {/* ABOUT THE COURSE */}
        <Box sx={{ py: 7 }}>
          <Typography
            variant="h4"
            sx={{ color: '#173C2D', fontWeight: 900, mb: 2 }}
          >
            About This Course
          </Typography>

          <Typography
            sx={{ color: '#68756D', lineHeight: 2, fontSize: 16, maxWidth: 900 }}
          >
            Web development is the process of creating and maintaining
            websites and web applications. It involves designing the
            appearance of a website, building its structure and adding
            interactive features.

            This learning path introduces beginners to the essential
            technologies used in modern web development. You will learn
            the concepts step by step and apply them through practical
            exercises and projects.
          </Typography>
        </Box>

        {/* COURSE TOPICS */}
        <Box sx={{ pb: 7 }}>
          <Typography
            variant="h4"
            sx={{ color: '#173C2D', fontWeight: 900, mb: 2 }}
          >
            Explore What You Will Learn
          </Typography>

          <Typography sx={{ color: '#68756D', mb: 4, lineHeight: 1.8 }}>
            The course covers important skills and technologies used
            to build modern websites.
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 3,
            }}
          >
            {topics.map((topic, index) => (
              <Card
                key={topic.title}
                elevation={0}
                sx={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D2EBDD',
                  borderRadius: 3,
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      color: '#278653',
                      fontWeight: 900,
                      fontSize: 14,
                      mb: 2,
                    }}
                  >
                    MODULE 0{index + 1}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{ color: '#173C2D', fontWeight: 800, mb: 1 }}
                  >
                    {topic.title}
                  </Typography>

                  <Typography
                    sx={{ color: '#68756D', lineHeight: 1.8, fontSize: 14 }}
                  >
                    {topic.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* LEARNING OUTCOMES */}
        <Box
          sx={{
            backgroundColor: '#E4F2E8',
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            mb: 7,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: '#173C2D', fontWeight: 900, mb: 3 }}
          >
            What You Will Be Able to Do
          </Typography>

          {outcomes.map((item) => (
            <Box
              key={item}
              sx={{ display: 'flex', gap: 2, mb: 2, alignItems: 'center' }}
            >
              <Typography sx={{ color: '#278653', fontWeight: 900 }}>
                ✓
              </Typography>
              <Typography sx={{ color: '#173C2D', lineHeight: 1.7 }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* PRACTICAL PROJECTS */}
        <Box sx={{ pb: 7 }}>
          <Typography
            variant="h4"
            sx={{ color: '#173C2D', fontWeight: 900, mb: 2 }}
          >
            Learn Through Practical Projects
          </Typography>

          <Typography sx={{ color: '#68756D', lineHeight: 1.9, mb: 3 }}>
            Put your knowledge into practice by working towards projects
            such as:
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 2,
            }}
          >
            {[
              'Personal portfolio website',
              'Business landing page',
              'Responsive school website',
              'Interactive web application',
            ].map((project) => (
              <Box
                key={project}
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 2,
                  p: 3,
                  borderLeft: '4px solid #278653',
                }}
              >
                <Typography sx={{ color: '#173C2D', fontWeight: 700 }}>
                  {project}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* REGISTRATION */}
        <Box
          id="registration"
          sx={{
            backgroundColor: '#173C2D',
            borderRadius: 4,
            p: { xs: 3, md: 5 },
            mb: 6,
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: '#FFFFFF', fontWeight: 900, mb: 2 }}
          >
            Register for Web Development
          </Typography>

          <Typography
            sx={{ color: '#D2EBDD', lineHeight: 1.8, mb: 4 }}
          >
            Interested in learning how to build websites?
            Complete the details below to register your interest.
          </Typography>

          <Box
            component="form"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 2,
            }}
          >
            <TextField
              label="Full Name"
              required
              fullWidth
              sx={{ backgroundColor: '#FFFFFF', borderRadius: 1 }}
            />

            <TextField
              label="Email Address"
              type="email"
              required
              fullWidth
              sx={{ backgroundColor: '#FFFFFF', borderRadius: 1 }}
            />

            <TextField
              label="Phone Number"
              required
              fullWidth
              sx={{ backgroundColor: '#FFFFFF', borderRadius: 1 }}
            />

            <TextField
              label="Learning Experience"
              select
              SelectProps={{ native: true }}
              fullWidth
              defaultValue="Beginner"
              sx={{ backgroundColor: '#FFFFFF', borderRadius: 1 }}
            >
              <option value="Beginner">Beginner</option>
              <option value="Some experience">Some experience</option>
              <option value="Experienced">Experienced</option>
            </TextField>

            <Box sx={{ gridColumn: '1 / -1' }}>
              <TextField
                label="Why do you want to learn Web Development?"
                multiline
                rows={3}
                fullWidth
                sx={{ backgroundColor: '#FFFFFF', borderRadius: 1 }}
              />
            </Box>

            <Typography
              sx={{
                color: '#B7E4C7',
                fontSize: 13,
                gridColumn: '1 / -1',
              }}
            >
              Registration form layout. Submission will be connected
              to the academy's registration system separately.
            </Typography>
          </Box>
        </Box>

        {/* FOOTER */}
        <Box sx={{ textAlign: 'center', py: 3 }}>
          <Typography sx={{ color: '#173C2D', fontWeight: 800 }}>
            Peacebytes Technology
          </Typography>
          <Typography sx={{ color: '#68756D', fontSize: 13, mt: 1 }}>
            Building digital skills for a better future.
          </Typography>
        </Box>

      </Container>
    </Box>
  );
};

export default WebDevelopment;