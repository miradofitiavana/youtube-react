import React, { useEffect, useState } from 'react'
import Video from '../components/video'
import SubMenu from '../components/submenu'
import Menu from '../components/menu'
import getTrending from '../api/home'

const Home = () => {
  const valueOffset = 20

  const [videos, setVideos] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    getTrending(valueOffset, setVideos, setError)
  }, [])

  return (
    <div>
      <SubMenu></SubMenu>
      <div>
        {videos.map((video, index) => (
          <Video video={video} key={index}></Video>
        ))}
      </div>
      <Menu></Menu>
    </div>
  )
}

export default Home
