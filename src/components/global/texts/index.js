import { Link, NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

const Heading = styled.h1`
  box-orient: vertical;
  display: box;
  max-height: 2.5em;
  overflow: hidden;
  line-height: ${props => (props.lineHeight ? props.lineHeight : '1.25')};
  text-overflow: ellipsis;
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'normal'};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : 'normal')};
  font-size: ${props => (props.fontSize ? props.fontSize : 'initial')};
  margin: ${props => (props.margin ? props.margin : '0 0 3px 0')};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : '')};
  width: ${props => (props.sizeW ? props.sizeW : '')};
  color: ${props => (props.color ? props.theme.headingColor : '')};
  border-bottom: ${props => (props.borderLine ? '5px solid #f3e8e5' : '')};
  border-bottom: ${props => (props.borderBottom ? props.borderBottom : '')};
  border-top: ${props => (props.borderTop ? props.borderTop : '')};
  border-left: ${props => (props.borderLeft ? props.borderLeft : '')};
  border-right: ${props => (props.borderRight ? props.borderRight : '')};
  border: ${props => (props.border ? props.border : '')};
  color: ${props => (props.color ? props.color : '')};
`

const Paragraph = styled.p`
  width: ${props => (props.sizeW ? props.sizeW : '')};
  color: ${props => (props.secondary ? 'hsla(0,0%,6.7%, .6 )' : 'initial')};
  color: ${props => (props.color ? props.color : '')};
  padding: ${props => (props.padding ? props.padding : '0')};
  margin: ${props => (props.margin ? props.margin : '0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '')};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : '')};
`

const Label = styled.label`
  font-size: ${props => (props.fontSize ? props.fontSize : '14px')};
  padding: ${props => (props.padding ? props.padding : '5px 0')};
  display: ${props => (props.display ? props.display : 'block')};
  color: ${props => (props.color ? props.color : '')};
`

const Span = styled.span`
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '')};
  font-size: ${props => (props.fontSize ? props.fontSize : '')};
  color: ${props => (props.color ? props.color : '')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : ''};
  display: ${props => (props.display ? props.display : '')};
  opacity: ${props => (props.opacity ? props.opacity : '')};
`

const commonLinkStyle = css`
  display: ${props => (props.display ? props.display : '')};
  padding: ${props => (props.padding ? props.padding : '10px 15px')};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : 'unset'};
  color: ${props => (props.color ? props.color : '#8b534c')};
  font-weight: 500;
  background-color: ${props => (props.bgc ? props.bgc : 'transparent')};
  transition: ${props => (props.transition ? 'all 0.4s' : '')};

  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
  flex-shrink: ${props => (props.flexShrink ? props.flexShrink : '')};
  position: ${props => (props.position ? props.position : '')};
  align-items: ${props => (props.alignItems ? props.alignItems : '')};

  width: ${props => (props.sizeW ? props.sizeW : '')};
  height: ${props => (props.sizeH ? props.sizeH : '')};

  &:hover {
  }
`

const LinkStyled = styled(Link)`
  ${commonLinkStyle}
`

const NavLinkStyled = styled(NavLink)`
  ${commonLinkStyle}
  &.active {
    color: #ff0000;
  }
`

export { Heading, Paragraph, Label, Span, LinkStyled, NavLinkStyled }
