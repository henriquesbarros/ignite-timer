import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem; /* 160px */
  line-height: 8rem; /* 128px */
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem; /* 32px 16px */
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  padding: 2rem 0; /* 32px 0 */
  color: ${(props) => props.theme['green-500']};

  width: 4rem; /* 128px */
  overflow: hidden;
  display: flex;
  justify-content: center;
`
