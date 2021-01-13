import React, { useState } from 'react'
import ButtonStyled from '../button'
import { DivStyled } from '../global'
import { TitleH2 } from '../texts'
import Icone from '../icone'
import PropTypes from 'prop-types'
import Commentaire from '../commentaire'
import Formulaire from '../formulaire'

const Commentaires = ({ videoId = 'null' }) => {
  const [show, setShow] = useState(false)
  const [commentaires, setCommentaires] = useState(
    localStorage.getItem(videoId)
      ? JSON.parse(localStorage.getItem(videoId))
      : []
  )

  const submit = (e, formState, setFormState, setErrorMessage) => {
    e.preventDefault()
    const allComments = localStorage.getItem(videoId)
      ? JSON.parse(localStorage.getItem(videoId))
      : []

    if (!formState.valeur) {
      setErrorMessage('Le champ ne doit pas être vide.')
      return
    }
    allComments.push({ contenu: formState.valeur })
    localStorage.setItem(videoId, JSON.stringify(allComments))
    setCommentaires(allComments)
  }

  return (
    <DivStyled margin='12px'>
      <ButtonStyled
        sizeW='100%'
        display='flex'
        sizeH='auto'
        onClick={() => setShow(!show)}
      >
        <TitleH2 margin='0' flexGrow='1'>
          <span>Commentaire{commentaires.length > 1 ? 's' : ''}</span>
          &nbsp;•&nbsp;{commentaires.length}
        </TitleH2>
        <Icone
          icone={show ? 'chevron-up' : 'chevron-down'}
          size='medium'
        ></Icone>
      </ButtonStyled>
      {show ? (
        <DivStyled marginTop='16px' paddingLeft='12px' paddingRight='12px'>
          <Formulaire submit={submit}></Formulaire>
          {commentaires.map((commentaire, index) => (
            <Commentaire key={index} commentaire={commentaire}></Commentaire>
          ))}
        </DivStyled>
      ) : null}
    </DivStyled>
  )
}

Commentaires.propTypes = {
  videoId: PropTypes.string
}

export default Commentaires
