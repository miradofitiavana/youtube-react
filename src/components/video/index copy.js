import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { DivStyled, ImageStyled } from '../global'
import { Link } from 'react-router-dom'

const Video = ({ video }) => {
  return (
    <Container>
      <Link>
        <ImageContainer>
          <ImageVideo src={video.snippet.thumbnails.maxres.url} />
          <DurationContainer>
            <DurationSpan>{video.contentDetails.duration}</DurationSpan>
          </DurationContainer>
        </ImageContainer>
      </Link>
      <Details>
        <ItemInfo>
          <ItemMetadata>
            <Link>
              <Titre>{video.snippet.localized.title}</Titre>
            </Link>
          </ItemMetadata>
          <ItemMenu></ItemMenu>
        </ItemInfo>
      </Details>
    </Container>
  )
}

const Titre = styled.h3`
  box-orient: vertical;
  -webkit-box-orient: vertical;
  display: box;
  display: -webkit-box;
  max-height: 2.5em;
  -webkit-line-clamp: 2;
  overflow: hidden;
  line-height: 1.25;
  text-overflow: ellipsis;
  font-weight: normal;
  font-size: 1.4rem;
  font-weight: 500;
`

const ItemMenu = styled(DivStyled)`
  color: #909090;
  flex-shrink: 0;
`

const ItemMetadata = styled(DivStyled)`
  margin-top: 8px;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  min-width: 0;
`

const ItemInfo = styled(DivStyled)`
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  margin-left: 12px;
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  flex-grow: 1;
  min-width: 0;
`

const Details = styled(DivStyled)`
  margin-top: 4px;
`

const Container = styled(DivStyled)`
  &::last-child {
    margin-bottom: 12px;
  }
`

const ImageContainer = styled(DivStyled)`
  position: relative;
  &:before {
    display: block;
    content: '';
    width: 100%;
    padding-top: 56.25%;
  }
`

const ImageVideo = styled(ImageStyled)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`

const DurationContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const DurationSpan = styled.span`
  font-weight: 700;
  margin: 5px;
  padding: 1px 4px;
  border-radius: 2px;
  font-size: 1.2rem;
  color: #eeeeee;
  background-color: hsla(0, 0%, 6.7%, 0.8);
`

Video.propTypes = {
  video: PropTypes.any
}

export default Video
