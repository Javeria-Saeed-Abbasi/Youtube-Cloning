import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core'
import VideoItem from './VideoItem'

const VideoList = ({ videos }) => {
  return (
    <>
      {videos.map((video, id) => (
        <Grid container spacing={10}>
          <VideoItem key={id} video={video} />
        </Grid>
      ))}
    </>
  )
}
export default VideoList
