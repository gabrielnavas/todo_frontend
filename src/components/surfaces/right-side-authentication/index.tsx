import {
  Container,
  TitleRightSide
} from './styles'

type RightSideAuthenticationProps = {
  children: React.ReactNode[] | React.ReactNode
  titleHeader: string
}

export const RightSideAuthentication = ({children, titleHeader}: RightSideAuthenticationProps) => {
  return (
    <Container>
       <TitleRightSide>{titleHeader}</TitleRightSide>
      {children}
    </Container>
  )
}