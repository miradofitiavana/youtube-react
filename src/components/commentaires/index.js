import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Container from '../global/container'
import { Button } from '../global/button'
import Icone from '../icone'
import { Heading } from '../global/texts'
import Formulaire from '../formulaire'
import Commentaire from '../commentaire'
import { uuid } from 'uuidv4'
import moment from 'moment'

const Commentaires = ({ videoId = 'null' }) => {
  const [show, setShow] = useState(false)
  const [commentaires, setCommentaires] = useState(
    (localStorage.getItem(videoId)
      ? JSON.parse(localStorage.getItem(videoId))
      : []
    )
      .slice()
      .sort((a, b) => b.date_creation - a.date_creation)
  )

  const actionSuppression = id => {
    const allComments = localStorage.getItem(videoId)
      ? JSON.parse(localStorage.getItem(videoId))
      : []
    const newList = allComments.filter(listElement => listElement.id != id)
    localStorage.setItem(videoId, JSON.stringify(newList))
    setCommentaires(newList)
  }

  const submit = (e, formState, setFormState, setErrorMessage) => {
    e.preventDefault()
    const allComments = localStorage.getItem(videoId)
      ? JSON.parse(localStorage.getItem(videoId))
      : []
    if (!formState.valeur) {
      setErrorMessage('Le champ ne doit pas être vide.')
      return
    }
    allComments.push({
      id: uuid(),
      contenu: formState.valeur,
      date_creation: moment()
    })
    localStorage.setItem(videoId, JSON.stringify(allComments))
    setCommentaires(allComments)
    setFormState({ valeur: '' })
    setErrorMessage('')
  }

  return (
    <Container margin='12px 0'>
      <Button
        sizeW='100%'
        display='flex'
        sizeH='auto'
        maxWidth='100%'
        padding='5px 15px'
        marginBottom='10px'
        onClick={() => setShow(!show)}
      >
        <Heading as='h2' margin='0' flexGrow='1'>
          <span>Commentaire{commentaires.length > 1 ? 's' : ''}</span>
          &nbsp;•&nbsp;{commentaires.length}
        </Heading>
        <Icone icone={show ? 'chevron-up' : 'chevron-down'} size='lg'></Icone>
      </Button>
      {show ? (
        <Container marginTop='16px' padding='0 15px'>
          <Formulaire submit={submit}></Formulaire>
          {commentaires.map((commentaire, index) => (
            <Commentaire
              key={index}
              commentaire={commentaire}
              actionSuppression={actionSuppression}
            ></Commentaire>
          ))}
        </Container>
      ) : null}
    </Container>
  )
}

Commentaires.propTypes = {
  videoId: PropTypes.string
}

export default Commentaires
