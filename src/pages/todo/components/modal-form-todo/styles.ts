import styled from "styled-components";
import { scrollDefault } from "../../../../styles/scroll-styles";

export const InputTextArea = styled.textarea`
  width: 80%;
  max-height: 400px;
  height: 250px;
  background: var(--gray);
  outline: none;
  font-size: 17px;
  padding: 5px;
  resize: none;
  ${scrollDefault};

  &:hover {
    padding: 3.5px;
    border: 1.5px solid var(--blue-light-hover);
  }
  &:focus {
    padding: 2.6px;
    border: 2.4px solid var(--blue-light-hover);
  }
`

export type TextButtonFinish =  'Insert' | 'Update' | 'Delete'
type ButtonHeaderProps = {
  children: TextButtonFinish
}

export const ButtonHeader = styled.button.attrs(({children}: ButtonHeaderProps) => ({
  backgroundColor: children === 'Insert' || children === 'Update' ? '--blue' : '--red',
  backgroundColorHover: children === 'Insert' || children === 'Update' ? '--blue-dark-hover' : '--red-dark-hover'
}))`
  height: 50px;
  width: 100px;
  background: var(${({backgroundColor}) => backgroundColor});
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    background: var(${({backgroundColorHover}) => backgroundColorHover});
  }
  &:active {
    background: var(--green);
  }
`

export const ButtonGroup = styled.div`
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
  color: var(--red);
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 35px;
  background: var(--secondary);
  width: 590px;
  height: 450px;
`

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  background: var(--blue-dark);
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;

`

export const ModalTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-top-left-radius: 35px;
  background: var(--gray);

  > span {
    font-size: 27px; 
    color: var(--white);
  }
`

export const ModalMain = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
