import styled from "styled-components";

type StyledProps = {
  isOpen: boolean
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props: StyledProps) => props.isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: rgba(0,0,0,.4)
`

export const Main = styled.main`
`