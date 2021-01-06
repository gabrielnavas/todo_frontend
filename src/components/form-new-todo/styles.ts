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
`

export const InputTextArea = styled.textarea`
  width: 100%;
  max-height: 400px;
  height: 250px;
  background: var(--gray);
`

export const ButtonSend = styled.button`
  height: 50px;
  width: 100px;
  background: var(--gray-light);
`

export const ErrorsContainer = styled.div`
  
`

export const Error = styled.span`

`