import React from 'react'
import Container from '../global/container'
import MenuItem from '../menu-item'

const Menu = () => {
  return (
    <Container
      as='nav'
      display='flex'
      justifyContent='space-around'
      sizeH='48px'
      position='fixed'
      bottom='0'
      left='0'
      right='0'
      borderTop=' 1px solid hsla(0, 0%, 53.3%, 0.4)'
      fontSize='1.1rem'
    >
      <MenuItem icon='home' label='Accueil' path='/home'></MenuItem>
    </Container>
  )
}

export default Menu
