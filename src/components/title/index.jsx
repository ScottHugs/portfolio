import React from "react";
import { Typography } from '@mui/material'

export default function Title ({ variant='h6', sx = {}, children, ...props }) {

  const component = typeof variant !== 'object' 
    ? variant 
    : variant.xl || 
      variant.lg ||
      variant.md ||      
      variant.sm ||
      variant.xs ||
      "h6"

  const variantStyles = typeof variant !== 'object'
    ? variant 
    : {
        xs: variant.xs,
        sm: variant.sm || variant.xs,
        md: variant.md || variant.sm || variant.xs,
        lg: variant.lg || variant.md || variant.sm || variant.xs,
        xl: variant.xl || variant.lg || variant.md || variant.sm || variant.xs
      }


  return (
    <Typography 
      variant='' 
      sx={{ 
        ...sx,
        typography: typeof variantStyles === 'object' && variantStyles,
        fontWeight: `${sx.fontWeight || 600}!important`,
        lineHeight: `${sx.lineHeight || 1.2}!important`
      }} 
      component={component} 
      {...props}
    >
      {children}
    </Typography>
  )

} 