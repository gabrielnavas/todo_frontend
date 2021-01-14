import styled from "styled-components";
import {FcTodoList} from 'react-icons/fc'

export const Container = styled.div`
  display: flex;
  height: 100%;
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
  background: var(--gray);
  border-right: 2px dashed var(--gray);
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 50%;
`
export const TitleRightSide = styled.span`
  margin: 65px 0;

  font-size: 55px;
  font-weight: 400px;
  color: var(--white);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 270px;
  width: 80%;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

export const Icon = styled(FcTodoList)`
  width: 500px;
  height: 500px;
`

export const Phrase = styled.span`
  font-size: 35px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: var(--white);
  font-style: italic;
  font-weight: 300;

  > strong {
    color: var(--blue);
    font-family: Cantarell;
    border-bottom: 1px dashed var(--blue);
    padding: 3px 0;
  }
`

export type TextButtonFinish =  'Create' | 'Login page' 
type ButtonProps = {
  children: TextButtonFinish
}

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 35px;
  width: 37%;
`

export const Button = styled.button.attrs(({children}: ButtonProps) => ({
  backgroundColor: children === 'Create' ? '--blue' : '--gray-light',
  backgroundColorHover: children === 'Create' ? '--blue-light-hover' : '--secondary'
}))`
  height: 50px;
  background: var(${({backgroundColor}) => backgroundColor});
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 15px;
  padding: 0 17px;

  &:hover {
    background: var(${({backgroundColorHover}) => backgroundColorHover});
  }
  &:active {
    background: var(--green);
  }
`
