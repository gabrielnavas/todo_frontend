import styled from "styled-components";

export const Container = styled.button`
  background: var(--white);
  color: var(--secondary);
  height: 100%;
  width: 45px;
  cursor: pointer;
  outline: none;

  &:hover {
    background: var(--secondary);
    color: var(--white);
  }
  &:active {
    background: var(--green);
    color: var(--green-dark);
  }
`