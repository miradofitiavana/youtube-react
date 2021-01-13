import React, { useEffect, useState } from 'react'

import ButtonStyled from '../components/button'
import StyledIcone from '../components/icone'
import { Paragraph, TitleH2, TitleH3, LinkStyled } from '../components/texts'
import { DivStyled, ImageStyled } from '../components/global'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import getDetail from '../api/detail'
import Image from '../components/image'
import Commentaires from '../components/commentaires'

const Detail = props => {
  const videoId = props.match.params.id
  const videoUrl = `https://www.youtube.com/embed/${videoId}`

  const [video, setVideo] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    getDetail(videoId, setVideo, setError)
    console.log(video)
  }, [videoId])

  return (
    <div>
      <DivStyled>
        <VideoObject data={videoUrl}></VideoObject>
      </DivStyled>
      <DivStyled borderBottom='1px solid hsla(0,0%,53.3%, .4 )'>
        <DivStyled>
          <ButtonStyled
            sizeH='auto'
            margin='0 3px 3px;'
            sizeW='calc(100% - 6px)'
          >
            <DivStyled display='flex' padding='10px 0px'>
              <DivStyled flexGrow='1'>
                <TitleH2>{video?.snippet?.title}</TitleH2>
                <Paragraph secondary>
                  {video?.statistics?.viewCount} vues
                </Paragraph>
              </DivStyled>
              <ButtonStyled>
                <StyledIcone icone='chevron-down' size='medium'></StyledIcone>
              </ButtonStyled>
            </DivStyled>
          </ButtonStyled>
        </DivStyled>
        <DivStyled
          borderTop='1px solid hsla(0,0%,53.3%, .4 )'
          padding='12px 21px'
          alignItems='center'
          display='flex'
        >
          <LinkStyled display='flex'>
            <DivStyled>
              <TitleH3>{video?.snippet?.channelTitle}</TitleH3>
              <TitleH3>{video?.channel?.kind}</TitleH3>
            </DivStyled>
          </LinkStyled>
        </DivStyled>
      </DivStyled>
      <Commentaires videoId={videoId}></Commentaires>
    </div>
  )
}

const VideoObject = styled.object`
  width: 100%;
  min-height: 323px;
`

export default Detail
