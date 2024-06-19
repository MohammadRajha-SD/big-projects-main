import React, {useState } from 'react'
import { Add as AddIcon, 
  // EmojiEmotions, Image, PersonAdd, VideoCameraBack,
  DateRange} from '@mui/icons-material'
import { styled, Avatar, Box, Fab, Modal, Tooltip, Typography, Button, ButtonGroup } from '@mui/material'
import {StyledInput, StyledTextarea} from '../Form/index'
import axiosClient from '../axios-client'
import { useStateContext } from '../contexts/ContextProvider'
import { useNavigate } from 'react-router-dom'

const StyledModal = styled(Modal) ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box) ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const {setNotfication} = useStateContext()
  const [open, setOpen] = useState(false)
  const [errors, setErrors] = useState('')
  const [payload, setPayload] = useState({})
  const navigate  = useNavigate()

  const handleChange = (e) => {
    const name = e.target.name
    let value = e.target.value
    try{
      if(e.target.files[0].name  && name === 'thumbnail'){
        value = e.target.files[0]
        setPayload(val => ({...val, [name]:value}))
        console.log(payload)
      }
    }
    catch (err) {
      setPayload(val => ({...val, [name]:value}))

      if(value) {
        setErrors(val => ({...val, [name]:''}))
      }else{
        setErrors(val => ({...val, [name]:val}))
      }
    }
    
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(payload)

    axiosClient.post('/posts/create', payload, {
      headers: {
        'Content-Type': 'multipart/form-data', 
     },
   })
    .then((response) => {
      console.log(response)
      if (response.status === 200){
        setOpen(false)
        navigate('/')
        setPayload({})
      }
      setNotfication(response.data)
    }).catch(err => {
      const response = err.response;
      if(response && response.status === 422) {
        if(response.data.errors) {
          setErrors(response.data.errors)
        }else{
          setErrors({'title': [response.data.message]})
        }
      }
    });
  }

  return (
    <>
      <Tooltip 
        title="Add"
        onClick={(e) => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal open={open} onClose={(e) => setOpen(false)}>
        <Box
          width={400}
          height={370}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
        >
          <Typography  variant='h6' color="gray" textAlign="center">
            Create Post
          </Typography>

          <UserBox>
            <Avatar
                src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                sx={{ width: 30, height: 30 }}
           />
            <Typography fontWeight={500} variant="span">
              John Doe
            </Typography>
          </UserBox>

          <form action="/posts/create" method='POST' onSubmit={onSubmit} encType='multipart/form-data'>
            <StyledInput
              placeholder="Title?"
              name='title'
              onChange={handleChange}
              sx={{ borderColor: errors.title ? 'red' : '' }}
            />

            <StyledTextarea
              multiline
              rows={3}
              name='body'
              onChange={handleChange}
              placeholder="What's on your mind?"
              sx={{ borderColor: errors.body ? 'red' : '' }}
            />

            <Button
              variant="outlined"
              component="label"
              fullWidth
              sx={{ borderColor: errors.thumbnail ? 'red' : '' }}
            >
              Upload Image
              <input
                type="file"
                hidden
                onChange={handleChange}
                name='thumbnail'
                id='thumbnail'
              />
            </Button>

          {/* <Stack direction="row" gap={1} mt={2} mb={3} >
             <EmojiEmotions color="primary" />
             <Image color="secondary" />
             <VideoCameraBack color="success" />
             <PersonAdd color="error" />
          </Stack> */}

          <ButtonGroup fullWidth variant="contained" sx={{ marginTop: '10px' }}>
            <Button type='submit'>Post</Button>
            <Button sx={{ width: "100px" }}><DateRange /></Button>
          </ButtonGroup>
        </form>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add 