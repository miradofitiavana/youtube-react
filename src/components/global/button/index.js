import styled from 'styled-components'

const Button = styled.button`
  margin-top: ${props => (props.marginTop ? props.marginTop : '')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '')};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : '')};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : '')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '')};
  padding: ${props => (props.padding ? props.padding : '5px 20px')};

  max-width: ${props => (props.maxWidth ? props.maxWidth : '320px')};
  max-height: ${props => (props.maxHeight ? props.maxHeight : '320px')};
  width: ${props => (props.sizeW ? props.sizeW : '')};
  height: ${props => (props.sizeH ? props.sizeH : '')};

  background-color: ${props => (props.bgc ? props.bgc : 'transparent')};
  color: ${props => (props.color ? props.color : 'inherit')};

  border: ${props => (props.border ? props.border : 'none')};
  outline: ${props => (props.outline ? props.outline : 'none')};
  display: ${props => (props.display ? props.display : '')};

  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'inherit'};
  text-align: ${props => (props.textAlign ? props.textAlign : 'inherit')};
`

export { Button }
