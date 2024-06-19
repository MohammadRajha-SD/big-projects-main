import { Box, Typography } from '@mui/material'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {StyledInput, StyledForm, StyledButton, StyledError } from '../Form/index'
import axiosClient from '../axios-client';
import { useStateContext } from '../contexts/ContextProvider';

const Signup = () => {
  const [payload, setPayload] = useState({});
  const [errors, setErrors] = useState(null);
  const {setToken, setUser, setNotification} = useStateContext();

  const onSubmit = (e) => {
    e.preventDefault();
    axiosClient.post('register', payload)
    .then(({data}) => {
      setUser(data.user);
      setToken(data.token);
      setNotification('User Created Successfully!.')
    })
    .catch(err => {
      const response = err.response;
      console.log(response);
      if(response && response.status === 422) {
        setErrors(response.data.errors)
      };

    });
  }
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setPayload(val => ({...val, [name]:value}))
  }
  return (
  <StyledForm onSubmit={onSubmit}>
      <Typography variant='h4' fontWeight='bold' marginBottom={4} textAlign={'center'}>Signup for free</Typography>
      
      <StyledInput type='text' name="name" placeholder='Full Name' onChange={handleChange}/> 
      {errors && <StyledError>{errors.name}</StyledError>}

      <StyledInput type='email'  name="email" placeholder='Email Address' onChange={handleChange} /> 
      {errors && <StyledError>{errors.email}</StyledError>}

      <StyledInput type='password' name="password" placeholder='Password' onChange={handleChange} /> 
      {errors && <StyledError>{errors.password}</StyledError>}

      <StyledInput type='password' name="password_confirmation" placeholder='Confirm Password' onChange={handleChange} /> 
      {errors && <StyledError>{errors.password_confirmation}</StyledError>}

      <StyledButton  type='submit' variant="contained">Register</StyledButton>
      
      <Box sx={{ display:'flex', justifyContent:'space-between', marginTop: 2, fontWeight: 'bold', fontSize:'14px' }}>
        Already Registered? <Link to='/login'>Signup</Link>
      </Box>
    </StyledForm>
  )
}

export default Signup