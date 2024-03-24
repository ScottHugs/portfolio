import React from "react";
import { Stack } from '@mui/material'

export default function NavButton ({ children, ...props }) {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      spacing={1}
      sx = {{
        cursor: 'pointer',
        color: 'text.secondary', 
        "&:hover": { color: 'text.primary' }
      }}
      {...props}
    >
      {children}
    </Stack>
  )
}