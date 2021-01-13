import styled from 'styled-components'

const ButtonStyled = styled.button`
  padding: ${props => (props.padding ? props.padding : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  height: ${props => (props.sizeH ? `${props.sizeH}` : '')};
  width: ${props => (props.sizeW ? `${props.sizeW}` : '')};

  border: none;
  outline: none;
  font: inherit;
  text-transform: ${props =>
    props.textTransform ? props.textTransform : 'inherit'};
  color: inherit;
  background-color: ${props =>
    props.backgroundColor ? `${props.backgroundColor}` : 'transparent'};
  text-align: left;

  display: ${props => (props.display ? `${props.display}` : 'flex')};
  align-items: center;
  flex-grow: ${props => (props.flexGrow ? `${props.flexGrow}` : '')};
`
ButtonStyled.defaultProps = {
  padding: '0 12px',
  sizeH: '48px'
}

export default ButtonStyled
