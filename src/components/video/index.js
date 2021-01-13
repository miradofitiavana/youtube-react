import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DivStyled, ImageStyled } from '../global'
import { Link } from 'react-router-dom'
import { TitleH3 } from '../texts'
import ButtonStyled from '../button'
import Icone from '../icone'

const padTime = valeur => {
  return valeur.toString().padStart(2, '0')
}

const durationConverter = yt_duration => {
  const time_extractor = /([0-9]*H)?([0-9]*M)?([0-9]*S)?$/
  const extracted = time_extractor.exec(yt_duration)
  const hours = parseInt(extracted[1], 10) || 0
  const minutes = parseInt(extracted[2], 10) || 0
  const seconds = parseInt(extracted[3], 10) || 0
  return `${hours == 0 ? `` : `${hours}:`}${padTime(minutes)}:${padTime(
    seconds
  )}`
}

const Video = ({ video }) => {
  const link = `/video/${video.id}`
  return (
    <Container>
      <Item>
        <LinkVideo to={link}>
          <ImageDiv></ImageDiv>
          <ImageVideo src={video.snippet.thumbnails?.maxres?.url} />
          <DurationContainer>
            <Duration>
              {durationConverter(video.contentDetails.duration)}
            </Duration>
          </DurationContainer>
        </LinkVideo>
        <DetailsContainer>
          <ItemContainer marginLeft='12px' marginRight='12px'>
            <DivInfo marginTop='8px'>
              <LinkAbout to={link}>
                <TitleH3>{video.snippet.title}</TitleH3>
                <About>
                  <SpanCon>{video.snippet.channelTitle}</SpanCon>
                  <SpanCon>•</SpanCon>
                  <SpanCon>{video.statistics.viewCount} vues</SpanCon>
                  <SpanCon>•</SpanCon>
                  <SpanCon>{video.snippet.publishedAt}</SpanCon>
                </About>
              </LinkAbout>
            </DivInfo>
            <DivMenuStyled>
              <ButtonMenu>
                <Icone icone='ellipsis-v' size='medium' margin='auto'></Icone>
              </ButtonMenu>
            </DivMenuStyled>
          </ItemContainer>
        </DetailsContainer>
      </Item>
    </Container>
  )
}

const ButtonMenu = styled(ButtonStyled)`
  border: none;
  background: transparent;
  width: 40px;
  height: 40px;
  padding: 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
`

const DivInfo = styled(DivStyled)`
  display: block;
  flex-grow: 1;
  min-width: 0;
`

const DivMenuStyled = styled.div`
  display: flex;
  flex-shrink: 0;
`

const LinkAbout = styled.a`
  color: currentColor;
  text-decoration: none;
`

const SpanCon = styled.span`
  opacity: 0.6;
  margin-right: 4px;
  display: inline;
  font-size: 1.2rem;
`

const About = styled(DivStyled)`
  box-orient: vertical;
  display: box;
  max-height: 3em;
  text-overflow: ellipsis;
  overflow: hidden;
`

const ItemContainer = styled(DivStyled)`
  align-items: flex-start;
  display: flex;
  flex-grow: 1;
  min-width: 0;
`

const DetailsContainer = styled(DivStyled)`
  margin-top: 4px;
  margin-bottom: 16px;
  margin-left: 12px;
  flex-grow: 1;
  min-width: 0;
`

const Duration = styled.span`
  font-weight: 700;
  margin: 5px;
  padding: 1px 4px;
  border-radius: 2px;
  font-size: 1.2rem;
  color: #eeeeee;
  background-color: hsla(0, 0%, 6.7%, 0.8);
`

const DurationContainer = styled(DivStyled)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ImageVideo = styled(ImageStyled)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100%;
  margin: auto;
  min-width: 1px;
  filter: none;
`

const ImageDiv = styled(DivStyled)`
  background-color: hsla(0, 0%, 53.3%, 0.2);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 100%;
  margin: auto;
  display: block;
`

const LinkVideo = styled(Link)`
  display: block;
  margin: 0;
  padding: 0;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  justify-content: center;
  align-items: center;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
`

const Item = styled(DivStyled)`
  min-width: 0;
  padding: 0;
`

const Container = styled(DivStyled)`
  display: inline-block;
  vertical-align: top;
  margin: 0;
  width: 100%;
  &::last-child {
    margin-bottom: 12px;
  }
`

Video.propTypes = {
  video: PropTypes.any
}

export default Video
