import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Error = styled.div`
  color: var(--red-alt);
  padding: 4px;
  font-style: oblique;

  > strong {
    color: var(--blue);
  }
`
