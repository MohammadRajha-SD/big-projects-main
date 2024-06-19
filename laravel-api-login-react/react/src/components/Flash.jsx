import { styled } from '@mui/material'
import React from 'react'

const Flash = ({children, mode}) => {
    
const StyledFlash = styled('div') (({theme})=> ({
    position: 'fixed',
    width: '260px',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
    maxWidth: '200px',
    padding: '10px',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    background: theme.palette.primary.dark,
    color : '#fefefe',
    transition: '.4s',
    [theme.breakpoints.up("sm")]: {
        boxShadow: theme.shadows[5],
    },
}));

  return (
    <div>
        <StyledFlash>
            { children }
        </StyledFlash>
    </div>
  )
}

export default Flash