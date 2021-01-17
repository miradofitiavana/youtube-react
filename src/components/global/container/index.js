import styled from 'styled-components'

const Container = styled.div`
  display: ${props => (props.display ? props.display : '')};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : '')};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  flex: ${props => (props.flex ? props.flex : '')};
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};

  padding: ${props => (props.padding ? props.padding : '0')};
  margin: ${props => (props.margin ? props.margin : '0')};
  height: ${props => (props.sizeH ? props.sizeH : '')};
  width: ${props => (props.sizeW ? props.sizeW : '')};
  max-height: ${props => (props.maxSizeH ? props.maxSizeH : '')};
  max-width: ${props => (props.maxSizeW ? props.maxSizeW : '')};
  position: ${props => (props.position ? props.position : '')};
  box-shadow: ${props => (props.boxShadow ? props.boxShadow : '')};

  background-color: ${props =>
    props.isPanel ? props.theme.panelBgc : props.theme.bgc};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : ''};
  color: ${props => (props.color ? props.color : props.theme.color)};

  overflow: ${props => (props.overflow ? props.overflow : '')};

  top: ${props => (props.top ? props.top : '')};
  bottom: ${props => (props.bottom ? props.bottom : '')};
  left: ${props => (props.left ? props.left : '')};
  right: ${props => (props.right ? props.right : '')};

  border-top: ${props => (props.borderTop ? props.borderTop : '')};
  border-bottom: ${props => (props.borderBottom ? props.borderBottom : '')};

  font-size: ${props => (props.fontSize ? props.fontSize : '')};

  vertical-align: ${props => (props.verticalAlign ? props.verticalAlign : '')};
  text-overflow: ${props => (props.textOverflow ? props.textOverflow : '')};
  overflow: ${props => (props.overflow ? props.overflow : '')};
  box-orient: ${props => (props.boxOrient ? props.boxOrient : '')};

  flex-shrink: ${props => (props.flexShrink ? props.flexShrink : '')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
`

export default Container
