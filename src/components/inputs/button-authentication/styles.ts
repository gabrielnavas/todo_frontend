import styled from 'styled-components'


export type TextButtonFinish =  'Create' | 'Login'
type ButtonProps = {
  children: TextButtonFinish
}

export const Container = styled.button.attrs(({children}: ButtonProps) => ({
  backgroundColor: children === 'Create' || children === 'Login' ? '--blue' : '--gray-light',
  backgroundColorHover: children === 'Create' || children === 'Login' ? '--blue-light-hover' : '--secondary'
}))`
  height: 50px;
  background: var(${({backgroundColor}) => backgroundColor});
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: bold;
  border-radius: 12px;
  padding: 0 15px;

  &:hover {
    background: var(${({backgroundColorHover}) => backgroundColorHover});
  }
  &:active {
    background: var(--green);
  }
`