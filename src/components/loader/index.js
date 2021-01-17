import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Container from '../global/container'
import { Paragraph } from '../global/texts'

const Loader = () => {
  return (
    <Container padding='30px' textAlign='center'>
      <FontAwesomeIcon
        size='3x'
        icon={['fas', 'spinner']}
        spin
      ></FontAwesomeIcon>
      <Paragraph margin='14px 0 0 0' fontSize='16px' fontWeight='600'>
        Chargement...
      </Paragraph>
    </Container>
  )
}

export default Loader
