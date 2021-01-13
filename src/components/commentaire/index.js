import React from 'react'
import { DivStyled } from '../global'
import PropTypes from 'prop-types'
import { Paragraph } from '../texts'

const Commentaire = ({ commentaire = {} }) => {
  return (
    <DivStyled
      borderBottom='1px solid hsla(0,0%,53.3%, .4 )'
      padding='16px 12px;'
    >
      <Paragraph fontSize='1.4rem'>{commentaire.contenu}</Paragraph>
    </DivStyled>
  )
}

Commentaire.propTypes = {
  commentaire: PropTypes.any
}

export default Commentaire
