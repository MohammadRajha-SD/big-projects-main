import React from 'react'

import {
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CardMedia,
    IconButton,
    Avatar,
    Typography,
    Checkbox,
    Box,
    Skeleton,
} from '@mui/material'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import Moment from 'moment';

const Post = ({title, body, thumbnail, name, loading, date}) => {
  return (
    <Box flex={4}>
        <Card sx={{ margin: 5 }}>
            <CardHeader 
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circular" width={40} height={40} />
                      ) : (
                    <Avatar sx={{ bgcolor:'red' }} title={"Done by " + name}>
                        {name[0]}
                    
                    </Avatar>)
                }
                actions={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }

                title={loading ? (
                    <Skeleton animation="wave" height={10}
                        width="80%"
                        style={{ marginBottom: 6 }}
                    />) : (
                    title
                )}
                subheader={
                    loading ? (
                      <Skeleton animation="wave" height={10} width="40%" />
                    ) : (
                        // Moment(date).format('dd DD-MM-YYYY')
                        Moment(date).fromNow()
                    )
                  }
                />
            {loading ? (
                    <Skeleton sx={{ height: "300px" }} animation="wave" variant="rectangular" />
                ) : (
                <CardMedia 
                    component="img"
                    height="20%"
                    alt="An image user"
                    // image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    image={thumbnail}

                />
            )}
           
            <CardContent>
                {loading ? (
                <React.Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="80%" />
                </React.Fragment>
                ) : (
                <Typography variant="body2" color="text.secondary">
                    {/* This impressive paella is a perfect party dish and a fun meal to
                    cook together with your guests. Add 1 cup of frozen peas along with
                    the mussels, if you like. */}
                    {body}
                </Typography>
                )}
            </CardContent>

            <CardActions disableSpacing>
            {loading ? (
                <React.Fragment>
                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                    <Skeleton animation="wave" height={10} width="100%" />
                </React.Fragment>
                ) : (
                <>
                    <IconButton aria-label="add to favorites">
                        <Checkbox
                            icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />} 
                            color="error"
                        />
                    </IconButton>

                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </>
                )}
               
            </CardActions>
        </Card>
    </Box>
  )
}

export default Post
