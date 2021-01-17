import React, { useEffect, useState } from 'react'
import axios from 'axios'
import privateKey from '../.secret'
import Container from '../components/global/container'
import styled from 'styled-components'
import { Button } from '../components/global/button'
import { Heading, LinkStyled, Paragraph } from '../components/global/texts'
import { durationConverter, numFormatter } from './../utils/youtube'
import Commentaires from '../components/commentaires'
import Loader from '../components/loader'
import Erreur from '../components/erreur'

const Detail = props => {
  const videoId = props.match.params.id
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  const [video, setVideo] = useState({})
  const [channel, setChannel] = useState({})
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
        part: 'snippet,statistics',
        regionCode: 'FR',
        id: videoId
      }
    })
      .then(res => {
        setVideo(res.data.items.length > 0 ? res.data.items[0] : {})
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
      {loader ? <Loader /> : null}
      {error ? (
        <Erreur />
      ) : (
        <>
          <Container>
            <VideoObject data={videoUrl}></VideoObject>
          </Container>
          <Container borderBottom='1px solid hsla(0,0%,53.3%, .4 )'>
            <Container>
              <Button
                maxWidth='100%'
                sizeH='auto'
                sizeW='100%'
                padding='5px 15px'
              >
                <Container sizeW='100%' display='flex' paddin='10px 0'>
                  <Container flexGrow='1'>
                    <Heading as='h2' fontSize='1.9rem'>
                      {video?.snippet?.title}
                    </Heading>
                    <Paragraph color='hsla(0,0%,6.7%, .6 )'>
                      {numFormatter(video?.statistics?.viewCount)} vues
                    </Paragraph>
                  </Container>
                </Container>
              </Button>
            </Container>

            <Container
              borderTop='1px solid hsla(0,0%,53.3%, .4 )'
              padding='0'
              alignItems='center'
              display='flex'
            >
              <LinkStyled display='flex' sizeW='100%'>
                <Container flexGrow='1'>
                  <Heading as='h3' margin='0' lineHeight='1' fontWeight='700'>
                    {video?.snippet?.channelTitle}
                  </Heading>
                </Container>
                <Container>
                  <Heading
                    as='h3'
                    margin='0'
                    lineHeight='1'
                    fontWeight='700'
                    color='#cc0000'
                    textTransform='uppercase'
                  >
                    S'abonner
                  </Heading>
                </Container>
              </LinkStyled>
            </Container>
          </Container>
          <Commentaires videoId={videoId}></Commentaires>
        </>
      )}
    </Container>
  )
}

const VideoObject = styled.object`
  width: 100%;
  min-height: 323px;
`

export default Detail
