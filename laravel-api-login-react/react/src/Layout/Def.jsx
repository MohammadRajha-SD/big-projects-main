import React from 'react'
import {useStateContext} from '../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'
import { Box, Stack } from '@mui/material'
import { Feed, Rightbar, Sidebar, Add } from '../components/index'

const Defaultlayout = ({mode, setMode}) => {
  const {token} = useStateContext()

  if(!token){
    return <Navigate to="/login"/>
  }

  return (
    <Box
      bgcolor={"background.default"} 
      color={"text.primary"}
    >
      <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar mode={mode} setMode={setMode} />
          <Feed />
          <Rightbar />
      </Stack>
      <Add /> 
    </Box>
  )
}

export default Defaultlayout