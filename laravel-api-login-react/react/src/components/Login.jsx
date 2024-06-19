import { Box, Typography} from '@mui/material'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {StyledInput, StyledForm, StyledButton, StyledError } from '../Form/index'
import axiosClient from '../axios-client'
import {useStateContext}  from '../contexts/ContextProvider'

const Login = () => {
  
  const [errors, setErrors] = useState({})
  const emailRef = useRef()
  const passwordRef = useRef()
  const {setToken, setUser, setNotification} = useStateContext()

  const onSubmit = (e) => {
    e.preventDefault()

    const payload = {
      'email': emailRef.current.value || null,
      'password': passwordRef.current.value || null
    }

    axiosClient.post('/login', payload)
    .then(({data}) => {
      setToken(data.token)
      setUser(data.user)
      setNotification('Welcome Back!.')
    })
    .catch(err => {
      const response = err.response;
      if(response && response.status === 422) {
        if(response.data.errors) {
          setErrors(response.data.errors)
        }else{
          setErrors({'email': [response.data.message]})
        }
      }
    });
  }

  return (
    <StyledForm onSubmit={onSubmit} method='POST'>
      <Typography variant='h4' fontWeight='bold' marginBottom={4} textAlign={'center'}>Login into your account</Typography>

      <StyledInput type='email' placeholder='Email' ref={emailRef} /> 
      {errors && <StyledError>{errors.email}</StyledError>}

      <StyledInput type='password' placeholder='Password' ref={passwordRef}/> 
      {errors && <StyledError>{errors.password}</StyledError>}

      <StyledButton  variant="contained" type='submit'>Login</StyledButton>

      <Box sx={{ display:'flex', justifyContent:'space-between', marginTop: 2, fontWeight: 'bold', fontSize:'14px' }}>
        Not Registered? 
        <Link to='/signup' variant="#e6e6e6" >Create an account</Link>
      </Box>
    </StyledForm>
  )
}

export default Login