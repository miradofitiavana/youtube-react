import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

const BaseHeadings = css`
  box-orient: vertical;
  display: box;
  max-height: 2.5em;
  overflow: hidden;
  line-height: 1.25;
  text-overflow: ellipsis;
  font-weight: normal;
  margin: ${props => (props.margin ? props.margin : '0 0 3px 0')};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : '')};
  width: ${props => (props.sizeW ? props.sizeW : '')};
`

const TitleH1 = styled.h1`
  ${BaseHeadings}
`

const TitleH2 = styled.h2`
  ${BaseHeadings}
`

const TitleH3 = styled.h3`
  ${BaseHeadings}
`

const TitleH4 = styled.h4`
  ${BaseHeadings}
`

const TitleH5 = styled.h5`
  ${BaseHeadings}
`

const TitleH6 = styled.h6`
  ${BaseHeadings}
`

const Paragraph = styled.p`
  width: ${props => (props.sizeW ? props.sizeW : '')};
  color: ${props => (props.secondary ? 'hsla(0,0%,6.7%, .6 )' : 'initial')};
  color: ${props => (props.color ? props.color : '')};
  padding: ${props => (props.padding ? props.padding : '0')};
  margin: ${props => (props.margin ? props.margin : '0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '')};
`

const LinkStyled = styled(Link)`
  padding: ${props => (props.padding ? props.padding : '0')};
  margin: ${props => (props.margin ? props.margin : '0')};
  display: ${props => (props.display ? props.display : '')};
`

TitleH1.defaultProps = {}

export {
  TitleH1,
  TitleH2,
  TitleH3,
  TitleH4,
  TitleH5,
  TitleH6,
  Paragraph,
  LinkStyled
}
