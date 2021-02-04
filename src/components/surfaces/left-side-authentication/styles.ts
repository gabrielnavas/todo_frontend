import styled from 'styled-components'
import { logoAuthenticationPage } from '../../data-display/logo-authentication-page'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100%;
width: 50%;
background: var(--gray);
border-right: 2px dashed var(--gray);
`

export const Icon = styled(logoAuthenticationPage)`
  width: 500px;
  height: 500px;
`

export const Phrase = styled.span`
  font-size: 35px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--white);
  font-style: italic;
  font-weight: 300;

  > strong {
    color: var(--blue);
    font-family: Cantarell;
    border-bottom: 1px dashed var(--blue);
    padding: 3px 0;
  }
`
