import React, { useEffect, useState } from 'react'
import Container from '../components/global/container'
import Menu from '../components/menu'
import Video from '../components/video'
import axios from 'axios'
import privateKey from '../.secret'
import { Paragraph } from '../components/global/texts'
import Icone from '../components/icone'
import Loader from '../components/loader'
import Erreur from '../components/erreur'

const Home = () => {
  const valueOffset = 20

  const [videos, setVideos] = useState([])
  const [error, setError] = useState('')
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    setError('')
    axios({
      method: 'GET',
      url: 'https://youtube.googleapis.com/youtube/v3/videos',
      params: {
        key: privateKey,
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: valueOffset,
        regionCode: 'FR'
      }
    })
      .then(res => {
        setVideos(res.data.items)
      })
      .catch(err => {
        setError(err.message)
        setLoader(false)
      })
      .finally(() => {
        setLoader(false)
      })
  }, [])

  return (
    <Container>
      <Container maxSizeH='calc(100vh - 48px - 48px - 20px)'>
        {loader ? <Loader /> : null}
        {error ? (
          <Erreur />
        ) : (
          <Container>
            {videos.map(video => (
              <Video video={video} key={video.id}></Video>
            ))}
          </Container>
        )}
      </Container>
      <Menu></Menu>
    </Container>
  )
}

export default Home
