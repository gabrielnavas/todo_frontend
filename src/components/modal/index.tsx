import { 
  Container,
   Main 
} from './styles'

type ModalProps = {
  children?: React.ReactNode[] | React.ReactNode
  isOpen: boolean
  onClickOutSide: () => void
}

const Modal = ({children, isOpen, onClickOutSide}: ModalProps) => {
  if(isOpen) {
    return (  
      <Container 
        isOpen={isOpen}
        onClick={onClickOutSide}>
        <Main onClick={e => e.stopPropagation()}>
          { children }
        </Main>
      </Container>
    )
  } 
  return null
}

export { Modal }