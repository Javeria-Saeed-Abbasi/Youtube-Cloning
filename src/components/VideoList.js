import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  return (
    <>
      {videos.map((video, id) => (
        <VideoItem key={id} video={video} />
      ))}
         <Grid container spacing={10}>
        <VideoItem/>
        </Grid>
    </>
 
  )
}
export default VideoList;
