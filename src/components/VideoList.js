import React from "react";
import { Grid, Paper, Typography } from '@material-ui/core';
import VideoItem from "./VideoItem";

const VideoList  = ({videos
}) => {
    const listOfVideos = videos.map((video, id) => <VideoItem key={id} video={video}/>)
    return(

        listOfVideos
 
    )
    console.log(listOfVideos);
}
export default VideoList;