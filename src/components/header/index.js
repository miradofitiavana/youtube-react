import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import ButtonStyled from '../button'

import Icone from '../icone'
import Image from '../image'

import logo from './../../assets/youtube.svg'

const Header = () => {
  const history = useHistory()

  return (
    <Container>
      <ButtonStyled onClick={() => history.push('/')}>
        <Image src={logo} sizeW={89} sizeH={20} />
      </ButtonStyled>
      <LeftContainer>
        <ButtonStyled>
          <Icone icone='user-circle' size='large'></Icone>
        </ButtonStyled>
      </LeftContainer>
    </Container>
  )
}

const Container = styled.header`
  height: 48px;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.primary};
  color: #424242;
`

const LeftContainer = styled.div`
  flex-grow: 1;
  justify-content: flex-end;
  color: hsla(0, 0%, 6.7%, 0.6);
  min-width: 0;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
`

export default Header
