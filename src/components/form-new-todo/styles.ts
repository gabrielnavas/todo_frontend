import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputText = styled.input`
  width: 100%;
  height: 35px;
  background: var(--gray);
  outline: none;
  font-size: 17px;
  padding: 3px;

  &:hover {
    padding:1.5px;
    border: 1.5px solid var(--blue-light-hover);
  }
  &:focus {
    padding: 0.6px;
    border: 2.4px solid var(--blue-light-hover);
  }
`

export const InputTextArea = styled.textarea`
  width: 100%;
  max-height: 400px;
  height: 250px;
  background: var(--gray);
  outline: none;
  font-size: 17px;
  padding: 5px;

  &:hover {
    padding: 3.5px;
    border: 1.5px solid var(--blue-light-hover);
  }
  &:focus {
    padding: 2.6px;
    border: 2.4px solid var(--blue-light-hover);
  }
`

export const ButtonSend = styled.button`
  height: 50px;
  width: 100px;
  background: var(--blue-dark);
  cursor: pointer;
  outline: none;

  &:hover {
    background: var(--blue-dark-hover);
  }
  &:active {
    background: var(--green);
  }
`

export const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ErrorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0 5px 7px;

`

export const Error = styled.span`
  padding: 3px 0;
  color: var(--red)
`