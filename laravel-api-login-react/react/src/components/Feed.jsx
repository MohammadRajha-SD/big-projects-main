import Post from './Post'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axiosClient from '../axios-client'
const base_url = 'http://localhost:8000/storage/'

const Feed = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axiosClient.post('posts')
    .then(({data}) => {
      setPosts(data)
      setTimeout(() =>{
        setLoading(false)
      },3000)
    });
  }, []);
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}>
        {posts.map((post, index) => { 
          return <Post 
            key={index}
            title={post.title}
            name={post.user.name}
            body={post.body}
            date={post.created_at}
            // thumbnail={"https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
            thumbnail={base_url+ post.thumbnail}
            loading={loading}
          />
        })}
    </Box>
  )
}

export default Feed