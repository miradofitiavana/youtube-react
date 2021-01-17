import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Container from '../global/container'
import { Paragraph } from '../global/texts'

const Erreur = () => {
  return (
    <Container padding='30px' textAlign='center'>
      <FontAwesomeIcon size='3x' icon={['fas', 'bomb']}></FontAwesomeIcon>
      <Paragraph margin='14px 0 0 0' fontSize='16px' fontWeight='600'>
        Une erreur s'est produite... Veuillez réessayer plus tard.
      </Paragraph>
    </Container>
  )
}

export default Erreur
