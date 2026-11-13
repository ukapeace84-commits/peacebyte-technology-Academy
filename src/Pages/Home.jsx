import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Avatar,
  Stack,
} from '@mui/material';

import {
  Code,
  Analytics,
  AutoAwesome,
  Palette,
  School,
  WorkspacePremium,
  LaptopMac,
  Groups,
  TrendingUp,
  ArrowForward,
  CheckCircle,
  Star,
} from '@mui/icons-material';

const green = '#155B40';
const lightGreen = '#A7DDBB';

const courses = [
  {
    title: 'Web Development',
    description: 'Learn HTML, CSS, JavaScript and React to build modern websites.',
    icon: <Code />,
  },
  {
    title: 'Data Analysis',
    description: 'Turn data into useful insights using Excel, SQL and Power BI.',
    icon: <Analytics />,
  },
  {
    title: 'AI & Automation',
    description: 'Discover artificial intelligence and build smarter workflows.',
    icon: <AutoAwesome />,
  },
  {
    title: 'UI/UX Design',
    description: 'Create beautiful, user-friendly digital experiences with Figma.',
    icon: <Palette />,
  },
];

const benefits = [
  {
    title: 'Practical Learning',
    description: 'Learn by doing, with activities that help you develop real skills.',
    icon: <LaptopMac />,
  },
  {
    title: 'Project-Based Training',
    description: 'Build practical projects that demonstrate what you can do.',
    icon: <WorkspacePremium />,
  },
  {
    title: 'Flexible Learning',
    description: 'Learn online and make progress at a pace that works for you.',
    icon: <School />,
  },
  {
    title: 'Career Development',
    description: 'Develop digital skills that prepare you for new opportunities.',
    icon: <TrendingUp />,
  },
];

const steps = [
  ['01', 'Create an Account', 'Register on the academy and get started.'],
  ['02', 'Choose a Course', 'Explore our courses and select what interests you.'],
  ['03', 'Learn and Practise', 'Follow lessons and complete practical activities.'],
  ['04', 'Build Your Future', 'Use your new skills to pursue opportunities.'],
];

const testimonials = [
  {
    name: 'Chinedu Okoro',
    role: 'Frontend Developer (Alumnus)',
    quote: 'Peacebytes Technology Academy gave me the exact hands-on structure I needed. Building real-world projects and learning modern React transformed my confidence from a complete beginner to landing my first tech role.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
  },
  {
    name: 'Amina Bello',
    role: 'Data Analyst & Insights Lead',
    quote: 'The depth of practical training in Excel, SQL, and Power BI was incredible. The mentors don’t just teach theory; they teach you how to solve actual business problems using data.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
  },
];
function SectionTitle({ eyebrow, title, description }) {
  return (
    <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: 6 }}>
      <Typography
        sx={{
          color: green,
          fontWeight: 800,
          letterSpacing: 2,
          fontSize: 13,
          mb: 1.5,
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        variant="h3"
        sx={{
          color: '#173C2D',
          fontWeight: 800,
          fontSize: { xs: '1.9rem', md: '2.7rem' },
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <Typography sx={{ color: '#66736C', lineHeight: 1.8 }}>
        {description}
      </Typography>
    </Box>
  );
}

function Home() {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', width: '100%', maxwidth: '100vw', overflow: 'hidden' }}>

      {/* HERO SECTION */}
      <Box sx={{ background: '#103D2D', py: { xs: 7, md: 11 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
              alignItems: 'center',
              gap: { xs: 5, md: 7 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  letterSpacing: 2,
                  mb: 2,
                }}
              >
                LEARN • CREATE • SUCCEED
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  color: '#ffffff',
                  fontWeight: 900,
                  fontSize: { xs: '2.1rem', md: '3.8rem' },
                  lineHeight: 1.13,
                  mb: 2.5,
                }}
              >
                Building Your Future With{' '}
                <Box component="span" sx={{ color: '#FFFFFF', fontWeight: 900 }}>
                  Digital Skills.
                </Box>
              </Typography>

              <Typography
                sx={{
                  color: '#ffffff',
                  fontSize: { xs: '1rem', md: '1.15rem' },
                  lineHeight: 1.9,
                  mb: 3,
                }}
              >
                Unleash your potential with online programming and web design
                from anywhere. Learn today's technology skills, build practical
                projects for tomorrow's opportunities.
              </Typography>

              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
              >
                <Button
                  variant="contained"
                  endIcon={<ArrowForward />}
                  sx={{
                    backgroundColor: green,
                    px: 3.5,
                    py: 1.6,
                    fontWeight: 700,
                    '&:hover': { backgroundColor: '#10452F' },
                  }}
                >
                  Explore Our Courses
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    px: 3.5,
                    py: 1.6,
                    fontWeight: 700,
                  }}
                >
                  About Our Academy
                </Button>
              </Stack>

              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                sx={{ mt: 4 }}
              >
                <CheckCircle sx={{ color: '#ffffff' }} />
                <Typography sx={{ color: '#ffffff', fontSize: 14 }}>
                  Learn online. Practise your skills. Grow your future.
                </Typography>
              </Stack>
            </Box>

            <Box
              sx={{
                position: 'relative',
                minHeight: { xs: 300, md: 440 },
                borderRadius: 5,
                overflow: 'hidden',
                boxShadow: '0 22px 55px rgba(21,91,64,0.25)',
              }}
            >
              <Box
                component="img"
                src="https://thumbs.wbm.im/pw/medium/a117afb12840d81119de9556eff64f46.jpg"
                alt="African student learning digital skills with a laptop"
                sx={{
                  width: '100%',
                  height: '100%',
                  minHeight: { xs: 300, md: 440 },
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  left: 20,
                  right: 20,
                  backgroundColor: '#B7E4C7 !',
                  borderRadius: 3,
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Avatar sx={{ bgcolor: lightGreen, color: green }}>
                  <School />
                </Avatar>
                <Box>
                  <Typography sx={{ fontWeight: 800, color: green }}>
                    Your digital journey starts here
                  </Typography>
                  <Typography sx={{ color: '#68756D', fontSize: 13 }}>
                    Learn skills for tomorrow's opportunities
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ABOUT SECTION */}
      <Box sx={{
        backgroundColor: '#B7E4C7', py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              alignItems: 'center',
              gap: 6,
            }}
          >
            <Box
              component="img"
              src="https://thumbs.wbm.im/pw/medium/650785064dd3aacd7141adc7ab9202dc.jpg"
              alt="African learner using a laptop in a classroom"
              sx={{
                width: '100%',
                height: { xs: 280, md: 390 },
                objectFit: 'cover',
                borderRadius: 4,
              }}
            />

            <Box>
              <Typography sx={{ color: green, fontWeight: 800, mb: 2 }}>
                ABOUT THE ACADEMY
              </Typography>

              <Typography
                variant="h3"
                sx={{
                  color: '#173C2D',
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.7rem' },
                  mb: 2.5,
                }}
              >
                Learn Today. Create Tomorrow.
              </Typography>

              <Typography sx={{ color: '#66736C', lineHeight: 1.9, mb: 2 }}>
                Peacebytes Technology Academy is an online learning platform
                created to help people discover, develop and strengthen their
                digital skills.
              </Typography>

              <Typography sx={{ color: '#66736C', lineHeight: 1.9, mb: 3 }}>
                From programming and data analysis to artificial intelligence
                and design, our learning experience focuses on practical
                knowledge, creativity and personal growth.
              </Typography>

              <Stack spacing={1.5}>
                {[
                  'Practical digital skills',
                  'Flexible online learning',
                  'Projects that build confidence',
                ].map((item) => (
                  <Stack key={item} direction="row" spacing={1.5} alignItems="center">
                    <CheckCircle sx={{ color: green }} />
                    <Typography sx={{ color: '#34483D', fontWeight: 600 }}>
                      {item}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* COURSES SECTION */}
      <Box sx={{ backgroundColor: '#A5D6A7', py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <SectionTitle
            eyebrow="WHAT YOU CAN LEARN"
            title="Explore Our Courses"
            description="Discover practical digital skills and choose a learning path that matches your interests and ambitions."
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)',
              },
              gap: 3,
            }}
          >
            {courses.map((course) => (
              <Card
                key={course.title}
                elevation={0}
                sx={{
                  height: '100%',
                  border: '1px solid #E5ECE6',
                  borderRadius: 3,
                  transition: '0.25s',
                  '&:hover': {
                    transform: 'translateY(-7px)',
                    boxShadow: '0 15px 35px rgba(21,91,64,0.12)',
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Avatar
                    sx={{
                      bgcolor: '#E4F2E8',
                      color: green,
                      width: 58,
                      height: 58,
                      mb: 3,
                    }}
                  >
                    {course.icon}
                  </Avatar>

                  <Typography
                    variant="h6"
                    sx={{ color: '#173C2D', fontWeight: 800, mb: 1.5 }}
                  >
                    {course.title}
                  </Typography>

                  <Typography sx={{ color: '#68756D', lineHeight: 1.8, mb: 2 }}>
                    {course.description}
                  </Typography>
<Typography
  component="a"
  href="#course-gallery"
  sx={{
    color: green,
    fontWeight: 800,
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      color: '#173C2D',
      gap: 1.5,
    },
  }}
>
  Learn More <ArrowForward fontSize="small" />
</Typography>
                 
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
      {/* EXPLORE OUR COURSES */}
<Box sx={{ backgroundColor: '#CBE6C9', py: { xs: 7, md: 10 } }}>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: 'center', mb: 6 }}>
      <Typography
        sx={{ color: '#278653', fontWeight: 800, mb: 1 }}
      >
        COURSES
      </Typography>

      <Typography
        sx={{
          color: '#173C2D',
          fontWeight: 900,
          fontSize: { xs: '2rem', md: '2.7rem' },
          mb: 2,
        }}
      >
        Explore Our Courses
      </Typography>

      <Typography
        sx={{
          color: '#68756D',
          maxWidth: 650,
          mx: 'auto',
          lineHeight: 1.8,
        }}
      >
        Discover practical digital skills and choose a learning path that
        matches your interests and ambitions.
      </Typography>
    </Box>

    <Box
    id="course-gallery"
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
      {[
        {
          title: 'Web Development',
          description: 'Learn to build modern, responsive websites and web applications.',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800',
        },
        {
          title: 'Data Analysis',
          description: 'Turn raw data into useful insights using modern analysis tools.',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
        },
        {
          title: 'Artificial Intelligence',
          description: 'Explore AI tools, machine learning and intelligent technologies.',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
        },
        {
          title: 'UI/UX Design',
          description: 'Create attractive, user-friendly digital experiences.',
          image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800',
        },
        {
          title: 'Digital Marketing',
          description: 'Learn how to promote brands and grow businesses online.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        },
        {
          title: 'Microsoft Office Skills',
          description: 'Develop practical skills in Word, Excel and PowerPoint.',
          image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
        },
      ].map((course) => (
        <Box
          key={course.title}
          sx={{
            backgroundColor: '#D2EBDD',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 25px rgba(23,60,45,0.08)',
            transition: '0.3s ease',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0 15px 35px rgba(23,60,45,0.15)',
            },
          }}
        >
          <Box
            component="img"
            src={course.image}
            alt={course.title}
            sx={{
              width: '100%',
              height: 190,
              objectFit: 'cover',
              display: 'block',
            }}
          />

          <Box sx={{ p: 3 }}>
            <Typography
              sx={{
                color: '#D2EBDD',
                fontWeight: 800,
                fontSize: 19,
                mb: 1.5,
              }}
            >
              {course.title}
            </Typography>

            <Typography
              sx={{
                color: '#68756D',
                fontSize: 14,
                lineHeight: 1.8,
                mb: 2.5,
              }}
            >
              {course.description}
            </Typography>

            <Button
              href={course.title === 'Web Development' ? '/web-development' : '#course-gallery'}
              variant="contained"
              sx={{
                backgroundColor: '#278653',
                color: '#FFFFFF',
                textTransform: 'none',
                fontWeight: 700,
                borderRadius: 2,
                px: 2.5,
                '&:hover': {
                  backgroundColor: '#173C2D',
                },
              }}
            >
              Explore Course
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  </Container>
</Box>
<Box
  id="web-development"
  sx={{ backgroundColor: '#F5F8F5', py: 8 }}
>
  <Container maxWidth="lg">
    <Typography
      sx={{
        color: '#173C2D',
        fontWeight: 800,
        fontSize: 30,
        mb: 2,
      }}
    >
      Web Development
    </Typography>

    <Typography sx={{ color: '#68756D', lineHeight: 1.8 }}>
      Learn to build modern, responsive websites and web applications
      using HTML, CSS, JavaScript and React.
    </Typography>
    <Typography
  sx={{
    color: '#173C2D',
    fontWeight: 800,
    fontSize: 22,
    mt: 4,
    mb: 2,
  }}
>
  What You Will Learn
</Typography>

<Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
  {[
    'HTML – Building web pages',
    'CSS – Styling websites',
    'JavaScript – Adding interactivity',
    'React – Building modern web applications',
  ].map((topic) => (
    <Box key={topic} sx={{ backgroundColor: '#E4F2E8', p: 2.5, borderRadius: 2 }}>
      <Typography sx={{ color: '#173C2D', fontWeight: 700 }}>
        {topic}
      </Typography>
    </Box>
  ))}
</Box>
  </Container>
</Box>

     {/* WHY CHOOSE US (Rich Green Background with Crisp White Text) */}
      <Box sx={{ py: { xs: 8, md: 11 }, backgroundColor: '#103D2D' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: 6 }}>
            <Typography sx={{ color: '#A7DDBB', fontWeight: 800, letterSpacing: 2, fontSize: 13, mb: 1.5 }}>
              WHY PEACEBYTES TECHNOLOGY
            </Typography>
            <Typography variant="h3" sx={{ color: '#FFFFFF', fontWeight: 800, mb: 2 }}>
              Why Choose Our Academy?
            </Typography>
            <Typography sx={{ color: '#E3F1E8', lineHeight: 1.8, fontSize: '1.1rem' }}>
              We want every learner to gain useful knowledge, practise confidently and prepare for real opportunities.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {benefits.map((benefit) => (
              <Box
                key={benefit.title}
                sx={{
                  display: 'flex',
                  gap: 2.5,
                  p: 3,
                  borderRadius: 3,
                  backgroundColor: '#174C37', // Deep contrasting card background
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Avatar sx={{ bgcolor: '#A7DDBB', color: '#103D2D', width: 55, height: 55 }}>
                  {benefit.icon}
                </Avatar>

                <Box>
                  <Typography sx={{ color: '#FFFFFF', fontWeight: 800, mb: 1, fontSize: '1.1rem' }}>
                    {benefit.title}
                  </Typography>
                  <Typography sx={{ color: '#E3F1E8', lineHeight: 1.8, fontSize: '0.95rem' }}>
                    {benefit.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* HOW IT WORKS (Soft Mint Green Background with Crisp Dark Text) */}
      <Box sx={{ backgroundColor: '#E4F2E8', py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 720, mx: 'auto', mb: 6 }}>
            <Typography sx={{ color: '#155B40', fontWeight: 800, letterSpacing: 2, fontSize: 13, mb: 1.5 }}>
              YOUR LEARNING JOURNEY
            </Typography>
            <Typography variant="h3" sx={{ color: '#173C2D', fontWeight: 800, mb: 2 }}>
              How It Works
            </Typography>
            <Typography sx={{ color: '#3A4D43', lineHeight: 1.8, fontSize: '1.1rem' }}>
              Getting started with your digital learning journey is simple.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
              gap: 3,
            }}
          >
            {steps.map(([number, title, description]) => (
              <Box
                key={number}
                sx={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 3,
                  p: 3,
                  boxShadow: '0 4px 15px rgba(21,91,64,0.06)',
                  border: '1px solid #D2EBDD',
                }}
              >
                <Typography sx={{ color: '#155B40', fontWeight: 900, fontSize: '2.5rem', mb: 2 }}>
                  {number}
                </Typography>
                <Typography sx={{ color: '#173C2D', fontWeight: 800, mb: 1, fontSize: '1.1rem' }}>
                  {title}
                </Typography>
                <Typography sx={{ color: '#3A4D43', lineHeight: 1.8, fontSize: '0.95rem' }}>
                  {description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* TESTIMONIALS */}
      <Box sx={{ py: { xs: 8, md: 11 } }}>
        <Container maxWidth="lg">
          <SectionTitle
            eyebrow="LEARNER EXPERIENCES"
            title="Growing Together"
            description="A welcoming learning community where people can develop their skills and work towards their goals."
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
              maxWidth: 900,
              mx: 'auto',
            }}
          >
            {testimonials.map((person) => (
              <Card
                key={person.name}
                elevation={0}
                sx={{
                  border: '1px solid #E5ECE6',
                  borderRadius: 3,
                  p: 2,
                }}
              >
                <CardContent>
                  <Stack direction="row" spacing={0.5} sx={{ mb: 2 }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} sx={{ color: '#E4B34F' }} />
                    ))}
                  </Stack>

                  <Typography sx={{ color: '#52635A', lineHeight: 1.9, mb: 3 }}>
                    “{person.quote}”
                  </Typography>

                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar
                      src={person.image}
                      alt={person.name}
                      sx={{ width: 55, height: 55 }}
                    />
                    <Box>
                      <Typography sx={{ color: '#173C2D', fontWeight: 800 }}>
                        {person.name}
                      </Typography>
                      <Typography sx={{ color: '#77847B', fontSize: 13 }}>
                        {person.role}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* FINAL CALL TO ACTION */}
      <Box sx={{ backgroundColor: green, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography
              variant="h3"
              sx={{
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: { xs: '2rem', md: '2.8rem' },
                mb: 2,
              }}
            >
              Ready to Start Your Learning Journey?
            </Typography>

            <Typography sx={{ color: '#E3F1E8', lineHeight: 1.8, mb: 4 }}>
              Take the first step towards building your digital future with
              Peacebytes Technology Academy.
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowForward />}
              sx={{
                backgroundColor: lightGreen,
                color: green,
                px: 4,
                py: 1.6,
                fontWeight: 800,
                '&:hover': { backgroundColor: '#FFFFFF' },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box sx={{ backgroundColor: '#123D2C', py: 3 }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: 700,
            }}
          >
            Peacebytes Technology
          </Typography>
          <Typography
            sx={{
              color: '#C9DCCF',
              textAlign: 'center',
              fontSize: 13,
              mt: 1,
            }}
          >
            Building your future with digital skills.
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}

export default Home;