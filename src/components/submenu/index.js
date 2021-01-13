import React from 'react'
import styled from 'styled-components'
import MenuItem from '../menu-item'

const SubMenu = () => {
  return (
    <Container>
      <MenuItem icon='home' label='Accueil' path='/home'></MenuItem>
      <MenuItem icon='fire' label='Tendances' path='/tendances'></MenuItem>
      <MenuItem
        icon='podcast'
        label='Abonnements'
        path='/abonnements'
      ></MenuItem>
      <MenuItem
        icon='play'
        label='Bibliothèque'
        path='/bibliotheque'
      ></MenuItem>
    </Container>
  )
}

export default SubMenu

const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0;
  padding: 0 env(safe-area-inset-right) env(safe-area-inset-bottom)
    env(safe-area-inset-left);
  z-index: 2;
  height: 48px;
  border-top: 1px solid hsla(0, 0%, 53.3%, 0.4);
  background: #ffffff;
  color: hsla(0, 0%, 6.7%, 0.6);
  font-size: 1.1rem;
`
