import React from 'react'
import './App.css'
import { Grid } from '@material-ui/core'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoItem from './components/VideoItem'
import VideoDetails from './components/VideoDetails'
import youtube from './api/youtube'
import { Button } from '@material-ui/core'
import { useState } from 'react'

const App = () => {
  const [video, setVideo] = useState()
  const [selectedVideo, setSelectedVideo] = useState()

  const handleSubmit = async (searchTerm) => {
    console.log(searchTerm)

    try {
      const res = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyCFXqNsbbXh7LEnJkWaxN8N6u6AQ4_GAiY',
          q: 'shadab Khan',
        },
      })
      setVideo(res.data.items)
      setSelectedVideo(res.data.items[0])
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Grid justifyContent="center" container>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
            <Button variant="contained" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Grid>
          {video ? (
            <>
              <Grid item xs={8}>
                <VideoDetails video={selectedVideo}></VideoDetails>
              </Grid>
              <Grid item xs={4}>
                <VideoList videos={video}></VideoList>
              </Grid>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
