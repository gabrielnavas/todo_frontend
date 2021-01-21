import { Container } from './styles'

export type OnClickModalCloseButton = () => void

export type ModalCloseButtonProps = {
  onClick: OnClickModalCloseButton
}

export const ModalCloseButton = ({ onClick }: ModalCloseButtonProps) => {
  return (
    <Container
      onClick={e => onClick()}
    >X</Container>
  )
}
