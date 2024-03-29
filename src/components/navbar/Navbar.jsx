import React from "react";
import { AppBar } from '@mui/material'
import { NAVBAR_HEIGHT } from "../../constants";
import { useTheme, useMediaQuery, Container, Stack, Button } from '@mui/material'
import useScrollPosition from "../../hooks/useScrollPosition";
import NavButton from "../buttons/NavButton";
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar () {

  const scrollPostion = useScrollPosition()

  const theme = useTheme()
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar 
      elevation={0} 
      sx= {{ 
        py: 1,
        height: NAVBAR_HEIGHT, 
        bgcolor: scrollPostion > 30 ? 'rgba(7,7,16,.7)' : 'transparent'
      }}
    >
      <Container>
        <Stack 
          direction={'row'} 
          alignItems={'start'}
          justifyContent={'space-between'} 
          flexWrap={'wrap'}
        >
          {/* Scott Hughes (ie home button)*/}
          <NavButton>Scott Hughes</NavButton>
          {/* Links */}
          { !isMediumScreen 
            ? 
              ( <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'end'}
                spacing={6}
                sx={{ flex: 1 }}
                flexWrap={'wrap'}
              >
                <NavButton>About</NavButton>
                <NavButton>Skills</NavButton>
                <NavButton>Projects</NavButton>
                <NavButton>Contact</NavButton>
                <NavButton>Resume</NavButton>
                
              </Stack> )
            : 
              <NavButton>
                <MenuIcon />
              </NavButton> 
        }


        </Stack>
      </Container>
    </AppBar>
  )

}    