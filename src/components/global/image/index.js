import styled from 'styled-components'

const Image = styled.img`
  width: ${props => (props.sizeW ? props.sizeW : '')};
  height: ${props => (props.sizeH ? props.sizeH : '')};
  position: ${props => (props.position ? props.position : '')};
  top: ${props => (props.top ? props.top : '')};
  bottom: ${props => (props.bottom ? props.bottom : '')};
  left: ${props => (props.left ? props.left : '')};
  right: ${props => (props.right ? props.right : '')};
  min-height: ${props => (props.minSizeH ? props.minSizeH : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  min-width: ${props => (props.minSizeW ? props.minSizeW : '')};
  filter: ${props => (props.filter ? props.filter : '')};
`

Image.defaultProps = {
  sizeW: '100%',
  sizeH: 'auto'
}

export default Image
