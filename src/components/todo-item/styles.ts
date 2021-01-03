import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid var(--white);
  cursor: pointer;
  margin-top: 10px;
  margin-right: 3px;

  :hover {
    border: 1px solid var(--red);
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 100%;
  font-size: 30px;
`

export const Description = styled.div`
  padding: 10px;
  width: 100%;
`
