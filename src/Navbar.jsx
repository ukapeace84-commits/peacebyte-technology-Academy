import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItem,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material';

const green = '#155B40';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Courses', href: '/courses' },
    { title: 'Login', href: '/login' },
    { title: 'Register', href: '/register' },
  ];

  return (
    <Box sx={{ backgroundColor: '#103D2D', borderBottom: '1px solid rgba(255,255,255,0.1)', py: 2, position: 'sticky', top: 0, zIndex: 1000 }}>
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography 
          component="a" 
          href="/"
          sx={{ color: '#FFFFFF', fontWeight: 900, fontSize: { xs: '1.1rem', md: '1.4rem' }, textDecoration: 'none' }}
        >
          Peacebyte Technology Academy
        </Typography>

        {/* Desktop Navigation Links */}
        <Stack direction="row" spacing={3} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
          {navLinks.map((link) => (
            <Typography
              key={link.title}
              component="a"
              href={link.href}
              sx={{
                color: '#E3F1E8',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.95rem',
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              {link.title}
            </Typography>
          ))}
        </Stack>

        {/* Mobile Three-Dash (Hamburger) Button */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' }, color: '#FFFFFF' }}
        >
          <MenuIcon />
        </IconButton>
      </Container>

      {/* MOBILE NAVIGATION DRAWER */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: 'none' } }}
      >
        <Box sx={{ width: 250, backgroundColor: '#103D2D', height: '100%', color: '#FFFFFF', p: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography sx={{ fontWeight: 900, fontSize: '1.2rem' }}>Menu</Typography>
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} disablePadding sx={{ mb: 2 }}>
                <Typography
                  component="a"
                  href={link.href}
                  onClick={handleDrawerToggle}
                  sx={{
                    color: '#E3F1E8',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    width: '100%',
                    '&:hover': { color: '#FFFFFF' },
                  }}
                >
                  {link.title}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}