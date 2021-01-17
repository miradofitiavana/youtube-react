import styled from 'styled-components'

const Form = styled.form`
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  display: ${props => (props.display ? props.display : '')};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '')};
  margin-right: ${props => (props.marginRight ? props.marginRight : '')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  max-width: ${props => (props.maxWidth ? props.maxWidth : '')};
`

const FormGroup = styled.div``

const Input = styled.input`
  appearance: ${props => (props.appearance ? props.appearance : 'none')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '0')};
  border: ${props => (props.border ? props.border : '')};
  box-sizing: ${props => (props.boxSizing ? props.boxSizing : 'border-box')};
  color: ${props => (props.color ? props.color : '')};
  font-size: ${props => (props.fontSize ? props.fontSize : '')};
  font: ${props => (props.font ? props.font : 'inherit')};
  height: ${props => (props.sizeH ? props.sizeH : '')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
  outline: ${props => (props.outline ? props.outline : 'none')};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : '')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '')};
  padding-right: ${props => (props.paddingRight ? props.paddingRight : '')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '')};
  padding: ${props => (props.padding ? props.padding : '')};
  width: ${props => (props.sizeW ? props.sizeW : '')};
`

export { Form, FormGroup, Input }
