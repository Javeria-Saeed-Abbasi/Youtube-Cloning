import React from 'react'
import './App.css'
import { Grid } from '@material-ui/core'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetails from './components/VideoDetails'
import youtube from './api/youtube'
import { Button } from '@material-ui/core'

const App = () => {
  const handleSubmit = async (searchTerm) => {
    console.log(searchTerm)

    try {
      const res = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: 'AIzaSyCFXqNsbbXh7LEnJkWaxN8N6u6AQ4_GAiY',
          q: 'baby',
        },
      })
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Grid justifyContent="center" container>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
            <Button variant="contained" onClick={() => handleSubmit()}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={8}>
            <VideoDetails></VideoDetails>
          </Grid>
          <Grid item xs={8}>
            <VideoList></VideoList>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default App
