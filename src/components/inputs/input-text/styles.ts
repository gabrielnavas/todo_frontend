import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40px;
  background: var(--gray);

  padding: 3px 5px;
  margin: 3px 0;

  &:hover {
    padding: 1.5px 2.5px;
    border-left: 2.5px dashed var(--blue-light-hover);
    border-right: 2.5px dashed var(--blue-light-hover);
    border-top: .8px dashed var(--blue-light-hover);
    border-bottom: .8px dashed var(--blue-light-hover);
  }
  &:focus {
    padding: 1.5px 2.5px;
    border-left: 2.5px dashed var(--blue-dark-alt);
    border-right: 2.5px dashed var(--blue-dark-alt);
    border-top: .8px dashed var(--blue-dark-alt);
    border-bottom: .8px dashed var(--blue-dark-alt);
  }
`

export const Input = styled.input`
  width: 100%;
  background: var(--gray);
  outline: none;
  font-size: 17px;
`

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
