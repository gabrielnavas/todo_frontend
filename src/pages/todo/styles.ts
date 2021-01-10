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
  width: 1200px;
`
