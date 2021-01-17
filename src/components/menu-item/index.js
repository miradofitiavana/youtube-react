import React from 'react'
import PropTypes from 'prop-types'
import Icone from '../icone'
import { Label, NavLinkStyled } from '../global/texts'
import Container from '../global/container'

const MenuItem = props => {
  return (
    <NavLinkStyled to={props.path} color='hsla(0, 0%, 6.7%, 0.6)' padding='0'>
      <Container
        sizeH='100%'
        display='flex'
        flex='1 1 0%'
        flexDirection='column'
        alignItems='center'
        overflow='hidden'
        justifyContent='center'
        color='inherit'
      >
        <Icone icone={props.icon} size='2x'></Icone>
        <Label fontSize='1.1rem' padding='0'>
          {props.label}
        </Label>
      </Container>
    </NavLinkStyled>
  )
}

MenuItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  path: PropTypes.string
}

export default MenuItem
