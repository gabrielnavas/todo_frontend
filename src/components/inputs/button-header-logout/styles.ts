import styled from 'styled-components'

export const Container = styled.button`
  height: 45px;
  padding: 0 5px;
  border-radius: 5px;
  color: var(--white);
  background: var(--red);
  width: 80px;
  height: 38px;
  cursor:pointer;
  outline: none;

  &:hover {
    height: 45px;
    transition-duration: 0.8s;
    background: var( --red-dark-hover);
  }
  &:active {
    height: 45px;
    transition-duration: 0.8s;
    background: var( --green);
  }
`
