import React from "react";
import { Box, Button, Container, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { introContent } from '../utils/content'
import ResumeButton from "../components/buttons/ResumeButton";
import Title from "../components/title/index.jsx";

const {
  ProfileImage
} = introContent

export default function Intro () {

  const theme = useTheme();

  return (
    <Box>
      {/* Main Background */}

      {/* background elemnts */}

      {/* contents */}
      <Container  sx={{ bgcolor: 'red', mt: 8 }} >
        <Stack sx={{ minHeight: '400px'}}
          direction={{ xs: 'column', md: 'row'}}
          spacing={5}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Stack sx={{ height: '100%' }} justifyContent={'start'}>
            <Title 
              variant= {{ xs: 'h4', sm: 'h3', md: 'h2' }}
              sx={{ fontWeight: '500', letterSpacing: '0.04em', mb: 0, mt: 2, lineHeight: 0.9}}
              
            >
              Hi, I'm
            </Title>

            <Title 
              variant= {{ xs: 'h3', sm: 'h2', md: 'h1' }}
              sx={{ letterSpacing: '0.04em', mb: 0  }}
            > 
              Scott Hughes
            </Title>

            <Title 
              variant= {{ xs: 'h5', sm: 'h4', md: 'h3' }}
              sx={{ fontWeight: '300', letterSpacing: '0.04em', mb: 0}}
            >
              Software Developer
            </Title>

            <Title 
              variant= {{ xs: 'h5', sm: 'h4', md: 'h3' }}
              sx={{ fontWeight: '300', letterSpacing: '0.04em', mb: 0 }}
            >
              Based in Newcastle
            </Title>

            <ResumeButton 
              sx={{ 
                height: 58, 
                px:10, my: 2, 
                width: '150px', [theme.breakpoints.down('sm')]: {width: '100%'} 
              }}
            />
          </Stack>
          <Box sx={{ display: 'block', m:5}}>
            <img src={ProfileImage} style={{ height: '30vw', maxHeight: '350px', borderRadius: '50%'}}/>
          </Box>
        </Stack>
      </Container>

    </Box>
  )

}  