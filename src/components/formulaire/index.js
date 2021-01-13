import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ButtonStyled from '../button'
import { DivStyled } from '../global'
import { Paragraph } from '../texts'

const Formulaire = ({ submit }) => {
  const [formState, setFormState] = useState({ valeur: '' })
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = e => {
    e.target.reset()
    submit(e, formState, setFormState, setErrorMessage)
  }

  return (
    <DivStyled>
      <StyledForm onSubmit={handleSubmit}>
        <StyledField
          onChange={e => setFormState({ ...formState, valeur: e.target.value })}
          placeholder='Ajouter un commentaire...'
        ></StyledField>
        <Paragraph sizeW='100%' color='red'>
          {errorMessage}
        </Paragraph>
        <DivStyled
          justifyContent='flex-end'
          marginTop='8px'
          display='flex'
          alignItems='center'
          sizeW='100%'
        >
          <ButtonStyled
            type='submit'
            display='flex'
            sizeH='auto'
            textTransform='uppercase'
          >
            Ajouter un commentaire
          </ButtonStyled>
        </DivStyled>
      </StyledForm>
    </DivStyled>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledField = styled.textarea`
  background-color: transparent;
  outline: none;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-border-radius: 0;
  border-radius: 0;
  margin-bottom: 1px;
  font: inherit;
  color: #111111;
  appearance: none;
  min-height: 8.4rem;
  width: 100%;
  border: 1px solid hsla(0, 0%, 53.3%, 0.4);
  padding: 6px;
  font-size: 1.4rem;
`

export default Formulaire
