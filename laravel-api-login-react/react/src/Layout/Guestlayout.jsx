import React from 'react'
import {useStateContext} from '../contexts/ContextProvider'
import {Navigate, Outlet} from 'react-router-dom'
import { Box, styled } from '@mui/material'

const Guestlayout = () => {
  const {token} = useStateContext()
  if(token){
    return <Navigate to="/" />
  }
  
  const StyledBox = styled(Box) (({theme})=> ({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop: '40px',
    height: 'calc(100vh - 120px)',
  }));
  
  return (
      <StyledBox
        bgcolor={"background.default"} 
        color={"text.primary"}
        className='animated fadeInDown'
        >
        <Outlet />
    </StyledBox>
  )
}

export default Guestlayout
