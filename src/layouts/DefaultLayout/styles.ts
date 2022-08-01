import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem; /* 1184px */
  height: calc(100vh - 10rem); /* 160rem */
  margin: 5rem auto; /* 80px */
  padding: 2.5rem; /* 40px */

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
