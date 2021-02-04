import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  max-height: 100vh;
  height: 100%;
  background: var(--secondary);
  overflow-y: hidden;
`

export const TodosAreas = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-height: 100%;
  margin-top: 20px;
  width: 1200px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 90%;
  height: 100%;
`

export const TitleHeader = styled.span`
  width: 100%;
  font-size: 40px;
  font-family: BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--blue);
`
