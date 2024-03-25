import React from "react";
import { Container, Grid, Stack, Typography } from '@mui/material'
import Title from "../components/title";
import { skillsContent } from "../utils/content";

const { LOGOS } =  skillsContent

export default function Skills () {
  return (
    <div>
      <Container sx={{ mt: {xs: 10, md: 20 }}}>
        <Container>
          <Title 
            variant={{ xs: 'h3', md: 'h2' }}
            sx={{ textAlign: 'center' }}
          >
            Skills
          </Title>
          <Grid
            container 
            spacing={5}
            sx={{ mt: 4 }}
            justifyContent={'center'}
          > 
             {
              LOGOS.map( ({ name, logo }) => (
                <Grid 
                  item 
                  xs={4} 
                  md={2.9} 
                  lg={2.4} 
                  key={name}
                >
                  <Stack alignItems={'center'} justifyContent={"space-between"} gap={2} sx={{ height: '100%'}}>
                    <Stack justifyContent={'center'} alignItems={'center'} sx={{ height: '100%'}}>
                      <img src={logo} style={{width: '60%', objectFit: 'contain' }} />
                    </Stack>
                 
                    <Typography variant='body2' color='text.secondary'>
                      {name}
                    </Typography>
                  </Stack>
                </Grid>
              ))

             }
          </Grid>
        </Container>
      </Container>
    </div>
  )

}