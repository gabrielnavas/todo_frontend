import {
  Container,
} from './styles'

import * as actions from '../../../store/modules/auth/actions'
import { useDispatch } from 'react-redux'

type ButtonHeaderLogoutProps = {
  children: string
}

const ButtonHeaderLogout = ({children}: ButtonHeaderLogoutProps) => {

  const dispatch = useDispatch()

  return (
    <Container
      onClick={e => dispatch(actions.loginFailure())}
    >Logout</Container>
  )
}

export { ButtonHeaderLogout }