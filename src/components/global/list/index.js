import styled from 'styled-components'

const UnorderList = styled.ul`
  margin: 0 auto;
  padding: 10px 0;

  list-style-type: none;

  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  text-align: center;
  text-transform: uppercase;
`

const OrderList = styled.ol``

const List = styled.li`
  display: ${props => (props.display ? props.display : '')};
  margin: ${props => (props.margin ? props.margin : '0')};
`

export { UnorderList, OrderList, List }
