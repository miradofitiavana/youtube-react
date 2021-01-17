import React from 'react'
import PropTypes from 'prop-types'
import Container from '../global/container'
import { Paragraph, Span } from '../global/texts'
import { Button } from './../global/button'
import Icone from './../icone'
import Moment from 'react-moment'
import 'moment/locale/fr'

const Commentaire = ({ commentaire = {}, actionSuppression }) => {
  return (
    <Container
      borderBottom='1px solid hsla(0,0%,53.3%, .4 )'
      padding='16px 12px'
      display='flex'
    >
      <Container flexGrow='1'>
        <Paragraph fontSize='1.4rem'>{commentaire.contenu}</Paragraph>
        <Moment fromNow>{commentaire.date_creation}</Moment>
      </Container>
      <Button
        padding='5px 0 5px 20px'
        onClick={() => actionSuppression(commentaire.id)}
      >
        <Icone icone='trash-alt' size='lg'></Icone>
      </Button>
    </Container>
  )
}

Commentaire.propTypes = {
  commentaire: PropTypes.any,
  actionSuppression: PropTypes.func
}

export default Commentaire
