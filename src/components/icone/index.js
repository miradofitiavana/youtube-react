import React from 'react'

import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const Icone = props => {
  return (
    <StyledIcone
      block={props.block}
      margin={props.margin}
      icon={['fas', props.icone]}
      size={props.size}
    />
  )
}

const StyledIcone = styled(FontAwesomeIcon)`
  display: ${props => (props.block ? 'block' : 'initial')};
  margin: ${props => (props.margin ? props.margin : '')};
  color: inherit;
`

Icone.propTypes = {
  icone: PropTypes.string,
  size: PropTypes.string,
  block: PropTypes.string,
  margin: PropTypes.string
}

export default Icone
