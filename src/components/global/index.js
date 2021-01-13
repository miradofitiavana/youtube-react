import styled from 'styled-components'

const ImageStyled = styled.img`
  width: ${props =>
    typeof props.sizeW == 'number' ? `${props.sizeW}px` : props.sizeW};
  height: ${props =>
    typeof props.sizeH == 'number' ? `${props.sizeH}px` : props.sizeH};
`

ImageStyled.defaultProps = {
  sizeW: '100%',
  sizeH: 'auto'
}

const DivStyled = styled.div`
  padding: ${props => (props.padding ? props.padding : '')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '')};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : '')};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
  width: ${props => (props.sizeW ? `${props.sizeW}` : '')};
  height: ${props => (props.sizeH ? `${props.sizeH}` : '')};
  display: ${props => (props.display ? props.display : '')};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : '')};
  border: ${props => (props.border ? props.border : '')};
  border-top: ${props => (props.borderTop ? props.borderTop : '')};
  border-bottom: ${props => (props.borderBottom ? props.borderBottom : '')};
  border-left: ${props => (props.borderLeft ? props.borderLeft : '')};
  border-right: ${props => (props.borderRight ? props.borderRight : '')};
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
`

export { DivStyled, ImageStyled }
