import styled from "styled-components";
import { scrollDefault } from "../../../../styles/scroll-styles";

export const Container = styled.div`
  height: 100%;
  overflow-y: scroll;

  ${scrollDefault}
`

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background: var(--blue);
  cursor: pointer;
  font-size: 22px;
  color: var(--white);
  font-weight: 400;

  &:hover {
    background: var(--blue-dark-alt);
  }
  &:focus {
    background: var(--blue-opacity);
  }
`


