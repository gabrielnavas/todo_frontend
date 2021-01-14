import styled from "styled-components";

export const Container = styled.input`
  width: 80%;
  height: 35px;
  background: var(--gray);
  outline: none;
  font-size: 17px;
  padding: 3px;
  margin: 3px 0;

  &:hover {
    padding: 1.5px;
    border: 1.5px solid var(--blue-light-hover);
  }
  &:focus {
    padding: 0.6px;
    border: 2.4px solid var(--blue-light-hover);
  }
`