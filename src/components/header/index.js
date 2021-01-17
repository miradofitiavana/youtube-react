import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '../global/button'
import Container from '../global/container'
import Image from '../global/image'
import Icone from '../icone'
import logo from './../../assets/youtube.svg'

const Header = () => {
  const history = useHistory()

  const logoAction = () => history.push('/')

  return (
    <Container
      sizeH='48px'
      position='relative'
      boxShadow='0 4px 2px -2px rgba(0, 0, 0, 0.2);'
      display='flex'
    >
      <Button padding='0 12px' border='none' onClick={logoAction}>
        <Image src={logo} sizeW='89px' sizeH='20px' />
      </Button>
      <Container display='flex' flexGrow='1' justifyContent='flex-end'>
        <Button padding='12px'>
          <Icone icone='user-circle' size='2x'></Icone>
        </Button>
      </Container>
    </Container>
  )
}

export default Header
