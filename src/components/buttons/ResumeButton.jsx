import React from "react";
import { Button } from '@mui/material'
import KeyBoardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'


export default function ResumeButton ({ sx = {}, ...props }) {
  return (
    <Button variant='contained' sx={{ borderRadius: 4, ...sx }} {...props} >
      Resume 
      <KeyBoardArrowRightIcon />
    </Button>
  )

} 