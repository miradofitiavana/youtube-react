import React from 'react'
import PropTypes from 'prop-types'
import Container from '../global/container'
import { Heading, LinkStyled, Span } from '../global/texts'
import styled from 'styled-components'
import Image from '../global/image'
import { Button } from '../global/button'
import Icone from '../icone'
import Moment from 'react-moment'
import 'moment/locale/fr'
import { durationConverter, numFormatter } from './../../utils/youtube'

const Video = ({ video }) => {
  const link = `/video/${video.id}`

  return (
    <Container verticalAlign='top' margin='0' sizeW='100%'>
      <Container padding='0'>
        <LinkVideo
          display='block'
          margin='0'
          padding='0'
          flexshrink='0'
          overflow='hidden'
          position='relative'
          justifycontent='center'
          alignitems='center'
          to={link}
        >
          <Container
            backgroundColor='hsla(0, 0%, 53.3%, 0.2)'
            position='absolute'
            top='0'
            bottom='0'
            left='0'
            right='0'
            sizeW='100%'
            minSizeH='100%'
            margin='auto'
            display='block'
          >
            <Image
              src={
                video.snippet.thumbnails?.maxres
                  ? video.snippet.thumbnails?.maxres?.url
                  : video.snippet.thumbnails?.medium?.url
              }
              position='absolute'
              top='0'
              bottom='0'
              left='0'
              right='0'
              minSizeH='100%'
              margin='auto'
              minSizeW='1px'
              filter='none'
            />
            <Container
              position='absolute'
              bottom='0'
              left='0'
              right='0'
              display='flex'
              flexDirection='column'
              alignItems='flex-end'
              backgroundColor='transparent'
            >
              <Span
                font-weight='700'
                margin='5px'
                padding='1px 4px'
                borderRadius='2px'
                font-size='1.2rem'
                color='#eeeeee'
                backgroundColor='hsla(0, 0%, 6.7%, 0.8)'
              >
                {durationConverter(video.contentDetails.duration)}
              </Span>
            </Container>
          </Container>
        </LinkVideo>

        <Container margin='4px 0 5px 10px' flexGrow='1'>
          <Container
            alignItems='flex-start'
            display='flex'
            flexGrow='1'
            margin='0'
          >
            <Container marginTop='8px' flexGrow='1' display='block'>
              <LinkStyled color='currentColor' to={link}>
                <Heading as='h3' fontWeight='500'>
                  {video.snippet.title}
                </Heading>
                <Container
                  display='box'
                  maxSizeH='3em'
                  textOverflow='ellipsis'
                  overflow='hidden'
                  boxOrient='vertical'
                >
                  <SpanVideo>{video.snippet.channelTitle}</SpanVideo>
                  <SpanVideo>•</SpanVideo>
                  <SpanVideo>
                    {numFormatter(video.statistics.viewCount)} vues
                  </SpanVideo>
                  <SpanVideo>•</SpanVideo>
                  <SpanVideo>
                    <Moment fromNow>{video.snippet.publishedAt}</Moment>
                  </SpanVideo>
                </Container>
              </LinkStyled>
            </Container>
            <Container display='flex' flexShrink='0'>
              <Button
                sizeW='40px'
                sizeH='40px'
                padding='8px'
                boxSizing='border-box'
                textAlign='center'
              >
                <Icone icone='ellipsis-v' size='lg' margin='auto'></Icone>
              </Button>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

const SpanVideo = styled(Span)`
  opacity: 0.6;
  margin: 0 4px 0 0;
  display: inline;
  font-size: 1.2rem;
`

const LinkVideo = styled(LinkStyled)`
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
`

Video.propTypes = {
  video: PropTypes.any
}

export default Video
