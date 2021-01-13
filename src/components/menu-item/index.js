import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Icone from '../icone'

const MenuItem = props => {
  return (
    <StyledLink to={props.path}>
      <Container>
        <Icone icone={props.icon} size='medium'></Icone>
        <Label>{props.label}</Label>
      </Container>
    </StyledLink>
  )
}

const StyledLink = styled(NavLink)`
  color: hsla(0, 0%, 6.7%, 0.6);
  text-decoration: none;

  &.active {
    color: #ff0000;
  }
`

const Container = styled.div`
  height: 100%;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 2rem;
`

const Label = styled.span`
  max-width: 100%;
  padding: 0 4px;
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1.1rem;
  padding-top: 2px;
`

MenuItem.propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string,
  path: PropTypes.string
}

export default MenuItem
