import {
  Container
} from './styles'

type IsLoadingProps = {
  isLoading: boolean
}

export const IsLoading = ({ isLoading }: IsLoadingProps) => {
  return (
    isLoading
      ? <Container>Loading</Container>
      : null
  )
}
