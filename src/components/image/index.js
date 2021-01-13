import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Image = props => {
  return <ImageStyled src={props.src} sizeW={props.sizeW} sizeH={props.sizeH} />
}

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

Image.propTypes = {
  src: PropTypes.string,
  sizeW: [PropTypes.number, PropTypes.string],
  sizeH: [PropTypes.number, PropTypes.string]
}

export default Image
