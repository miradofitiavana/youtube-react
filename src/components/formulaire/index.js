import React, { useState } from 'react'
import { Button } from '../global/button'
import Container from '../global/container'
import { Form, Input } from '../global/form'
import { Paragraph } from '../global/texts'

const Formulaire = ({ submit }) => {
  const [formState, setFormState] = useState({ valeur: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = e => {
    e.target.reset()
    submit(e, formState, setFormState, setErrorMessage)
  }

  return (
    <Container>
      <Form
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        onSubmit={handleSubmit}
      >
        <Input
          as='textarea'
          onChange={e => setFormState({ ...formState, valeur: e.target.value })}
          placeholder='Ajouter un commentaire...'
          marginBottom='1px'
          color='#111111'
          minHeight='8.4rem'
          sizeW='100%'
          border='1px solid hsla(0, 0%, 53.3%, 0.4)'
          padding='6px'
          fontSize='1.4rem'
        ></Input>
        <Paragraph sizeW='100%' color='red'>
          {errorMessage}
        </Paragraph>
        <Container
          justifyContent='flex-end'
          marginTop='8px'
          display='flex'
          alignItems='center'
          sizeW='100%'
        >
          <Button
            type='submit'
            display='flex'
            sizeH='auto'
            padding='5px 0 5px 20px'
            textTransform='uppercase'
          >
            Ajouter un commentaire
          </Button>
        </Container>
      </Form>
    </Container>
  )
}

export default Formulaire
